using System.Text;
using System.Text.Json;
using Asp.Versioning;
using backend.Constants;
using backend.Data;
using backend.Data.Models;
using backend.Extensions;
using backend.Middleware;
using backend.Services.Audits;
using backend.Services.Auth;
using backend.Services.ClarifyGoServices.Comments;
using backend.Services.ClarifyGoServices.HistoricRecordings;
using backend.Services.ClarifyGoServices.LiveRecordings;
using backend.Services.ClarifyGoServices.Tags;
using backend.Services.Storage;
using backend.Services.Sync;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.RateLimiting;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;


var builder = WebApplication.CreateBuilder(args);
var configuration = builder.Configuration;

// 1. Core Services
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddOutputCache();
builder.Services.AddControllers();
builder.Services.AddRateLimiter(options =>
{
    options.AddSlidingWindowLimiter("PerUserPolicy", opt =>
    {
        opt.Window = TimeSpan.FromMinutes(1);
        opt.PermitLimit = 100;
    });
});

builder.Services.AddAuthentication(options =>
{
    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
}).AddJwtBearer(options =>
{
    options.TokenValidationParameters = new TokenValidationParameters
    {
        ValidateIssuerSigningKey = true,
        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(
            builder.Configuration["Jwt:Key"]!)),
        ValidateIssuer = true,
        ValidateAudience = true,
        ValidIssuer = builder.Configuration["Jwt:Issuer"],
        ValidAudience = builder.Configuration["Jwt:Audience"],
        ClockSkew = TimeSpan.Zero
    };
});

builder.Services.AddAuthorization();

builder.Services.AddControllers()
    .AddJsonOptions(options =>
    {
        // Use camelCase for all property names by default
        options.JsonSerializerOptions.PropertyNamingPolicy = JsonNamingPolicy.CamelCase;
        options.JsonSerializerOptions.WriteIndented = true;
    });

// Add API versioning
builder.Services.AddApiVersioning(options =>
{
    options.DefaultApiVersion = new ApiVersion(ApiVersionConstants.MajorVersion, ApiVersionConstants.MinorVersion);
    options.AssumeDefaultVersionWhenUnspecified = true;
    options.ReportApiVersions = true;
    options.ApiVersionReader = ApiVersionReader.Combine(
        new UrlSegmentApiVersionReader(),
        new HeaderApiVersionReader(ApiVersionConstants.HeaderName),
        new QueryStringApiVersionReader(ApiVersionConstants.QueryStringParam)
    );
});

builder.Services.AddEndpointsApiExplorer();

string connection;

if (builder.Environment.IsDevelopment())

{
    connection = builder.Configuration.GetConnectionString("LocalDefaultConnection") ??
                 throw new InvalidOperationException(
                     "Connection string 'DefaultConnection' not found.");
}
else
{
    connection = configuration["ConnectionStrings:DefaultConnection"] ??
                 throw new InvalidOperationException(
                     "Connection string 'DefaultConnection' not found.");
}

builder.Services.AddDbContext<ApplicationDbContext>(options =>
{
    options.UseSqlServer(connection);

    // Move sensitive data logging configuration here and make it conditional
    if (builder.Environment.IsDevelopment())
    {
        options.EnableSensitiveDataLogging()
            .EnableDetailedErrors();
    }
});

builder.Services.AddDatabaseDeveloperPageExceptionFilter();


builder.Services.AddIdentityCore<User>()
    .AddRoles<Role>()
    .AddEntityFrameworkStores<ApplicationDbContext>()
    .AddDefaultTokenProviders();


// 2. Application Services
// 2.1. Live Recordings Service
builder.Services.AddScoped<ILiveRecordingsService, LiveRecordingsService>();

// 2.2 Historic Recordings Service
builder.Services.AddScoped<IHistoricRecordingsService, HistoricRecordingsService>();

// 2.3. Comments Service
builder.Services.AddScoped<ICommentsService, CommentsService>();

// 2.4 Tags Service
builder.Services.AddScoped<ITagsService, TagsService>();

// 2.5. Token Service
builder.Services.AddHttpContextAccessor();
builder.Services.AddScoped<ITokenService, TokenService>();

// 2.6 Audit Service
builder.Services.AddScoped<IAuditService, AuditService>();

// 2.7. Sync Service
builder.Services.AddScoped<ISyncService, SyncService>();

// 2.8. Storage Service
builder.Services.AddScoped<IBlobStorageService, BlobStorageService>();


// 3. HTTP Client Configurations
var identityServerUri = configuration["ClarifyGoAPI:IdentityServerUri"]
                        ?? throw new InvalidOperationException("Missing Identity Server URI configuration");

var apiBaseUri = configuration["ClarifyGoAPI:ApiBaseUri"]
                 ?? throw new InvalidOperationException("Missing API base URI configuration");

builder.Services.AddHttpClient<ITokenService, TokenService>(client =>
{
    client.BaseAddress = new Uri(identityServerUri);
});

builder.Services.AddHttpClient<ILiveRecordingsService, LiveRecordingsService>(client =>
{
    client.BaseAddress = new Uri(apiBaseUri);
});

builder.Services.AddHttpClient<IHistoricRecordingsService, HistoricRecordingsService>(client =>
{
    client.BaseAddress = new Uri(apiBaseUri);
});

builder.Services.AddHttpClient<ICommentsService, CommentsService>(client =>
{
    client.BaseAddress = new Uri(apiBaseUri);
});

builder.Services.AddHttpClient<ITagsService, TagsService>(client => { client.BaseAddress = new Uri(apiBaseUri); });


var allowedOrigins = configuration["AllowedOrigins"]
                ?? String.Empty;
// 4. Security Configuration
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontend", policy =>
    {
        policy.WithOrigins("http://localhost:3000", "http://localhost:3001", "http://localhost:5136", allowedOrigins)
            .AllowAnyHeader()
            .AllowAnyMethod()
            .AllowCredentials();
    });
});

builder.Services.AddCors(options =>
{
    options.AddPolicy("Worker", policy =>
    {
        policy.WithOrigins("https://autosyncworker.azurewebsites.net")
            .AllowAnyHeader()
            .AllowAnyMethod()
            .AllowCredentials();
    });
});

var app = builder.Build();

// 5. Middleware Pipeline
// app.UseHttpsRedirection();
if (app.Environment.IsDevelopment())
{
    app.UseMigrationsEndPoint();
    app.ApplyMigrations();
}
else
{
    app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseCors("AllowFrontend");
app.UseCors("Worker");
app.UseAuthentication();
app.UseAuthorization();
app.UseOutputCache();
app.UseRateLimiter();
app.UseMiddleware<GlobalExceptionHandler>();
app.MapControllers();


// app.UseDefaultFiles();
// app.UseStaticFiles(new StaticFileOptions
// {
//     ServeUnknownFileTypes = true,
// });
//
// app.Use(async (context, next) =>
// {
//     if (context.Request.Path == "/")
//     {
//         context.Request.Path = "/index.html";
//     }
//
//     await next();
// });


app.Run();