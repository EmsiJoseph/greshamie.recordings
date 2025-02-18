using System;
using System.Net.Http;
using System.Net.Http.Json;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using Microsoft.Azure.WebJobs;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using System.Text.Json;

namespace MyFunctions
{
    // Models to deserialize the login response.
    public class LoginResponse
    {
        public User User { get; set; }
        public AccessToken AccessToken { get; set; }
        public RefreshToken RefreshToken { get; set; }
    }

    public class User
    {
        public string UserName { get; set; }
    }

    public class AccessToken
    {
        public string Value { get; set; }
        public DateTime ExpiresAt { get; set; }
    }

    public class RefreshToken
    {
        public string Value { get; set; }
        public DateTime ExpiresAt { get; set; }
    }

    public class DailySyncFunction
    {
        private readonly IHttpClientFactory _httpClientFactory;
        private readonly IConfiguration _configuration;

        public DailySyncFunction(IHttpClientFactory httpClientFactory, IConfiguration configuration)
        {
            _httpClientFactory = httpClientFactory;
            _configuration = configuration;
        }

        [FunctionName("DailySyncFunction")]
        public async Task Run([TimerTrigger("0 0 0 * * *")] TimerInfo myTimer, ILogger log)
        {
            log.LogInformation($"DailySyncFunction triggered at: {DateTime.UtcNow:o}");
            try
            {
                // Create an HttpClient instance from the factory.
                var client = _httpClientFactory.CreateClient();

                // Retrieve endpoints and credentials from configuration.
                string loginUrl = _configuration["SyncSettings:LoginUrl"];
                string syncUrl = _configuration["SyncSettings:SyncUrl"];
                string username = _configuration["SyncSettings:Username"];
                string password = _configuration["SyncSettings:Password"];

                log.LogInformation($"Login URL: {loginUrl}");
                log.LogInformation($"Sync URL: {syncUrl}");

                // STEP 1: Log in to obtain the access token.
                var loginPayload = new { username, password };
                log.LogInformation("Sending login request...");
                HttpResponseMessage loginResponse = await client.PostAsJsonAsync(loginUrl, loginPayload);
                loginResponse.EnsureSuccessStatusCode();
                log.LogInformation("Login request succeeded.");

                // Deserialize the login response.
                LoginResponse tokenResponse = await loginResponse.Content.ReadFromJsonAsync<LoginResponse>();
                if (tokenResponse?.AccessToken == null || string.IsNullOrWhiteSpace(tokenResponse.AccessToken.Value))
                {
                    log.LogError("Login response did not contain a valid access token.");
                    throw new Exception("Failed to obtain a valid access token.");
                }
                // Clean the token by removing newline characters.
                string accessToken = tokenResponse.AccessToken.Value.Replace("\r", "").Replace("\n", "").Trim();
                log.LogInformation($"Obtained Bearer token: {accessToken}");

                // STEP 2: Calculate the sync period (previous day's midnight to today's midnight).
                DateTime Today = DateTime.Today;
                DateTime syncStart = Today.AddDays(-2);
                DateTime syncEnd = Today;
                log.LogInformation($"Calculated sync period: {syncStart.ToUniversalTime():o} to {syncEnd.ToUniversalTime():o}");

                // STEP 3: Construct the JSON payload.
                var syncPayload = new
                {
                    StartDate = syncStart.ToUniversalTime().ToString("yyyy-MM-ddTHH:mm:ssZ"),
                    EndDate = syncEnd.ToUniversalTime().ToString("yyyy-MM-ddTHH:mm:ssZ")
                };

                // Print the JSON payload.
                string jsonPayload = JsonSerializer.Serialize(syncPayload);
                log.LogInformation($"Sync payload: {jsonPayload}");

                // Set the Authorization header with the cleaned access token.
                client.DefaultRequestHeaders.Authorization =
                    new AuthenticationHeaderValue("Bearer", accessToken);

                // STEP 4: Call the manual sync endpoint with the JSON body.
                log.LogInformation("Sending sync request...");
                HttpResponseMessage syncResponse = await client.PostAsJsonAsync(syncUrl, syncPayload);
                if (syncResponse.IsSuccessStatusCode)
                {
                    log.LogInformation("Synchronization completed successfully.");
                }
                else
                {
                    string errorContent = await syncResponse.Content.ReadAsStringAsync();
                    log.LogError($"Synchronization failed with status code: {syncResponse.StatusCode}. Response: {errorContent}");
                    throw new Exception($"Synchronization failed with status code: {syncResponse.StatusCode}");
                }
            }
            catch (Exception ex)
            {
                log.LogError(ex, "DailySyncFunction encountered an error during synchronization.");
                throw;
            }
        }
    }
}
