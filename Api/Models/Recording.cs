using System.ComponentModel.DataAnnotations;

namespace Api.Models
{
    public class Recording
    {
        [Key]
        public int RecordingId { get; set; }
        public string? PhoneNumber { get; set; }
        public string? Participants { get; set; }
        public DateTime? FromDate { get; set; }
        public DateTime? ToDate { get; set; }
        public string? CallType { get; set; }
        public int? Duration { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.Now;
        public DateTime UpdatedAt { get; set; } = DateTime.Now;
    }
}
