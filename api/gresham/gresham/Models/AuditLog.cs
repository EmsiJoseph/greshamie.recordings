using System.ComponentModel.DataAnnotations;

namespace gresham.Models
{
    public class AuditLog
    {
        [Key]
        public int AuditLogId { get; set; }
        public int UserId { get; set; }
        public string Action { get; set; }
        public DateTime Timestamp { get; set; } = DateTime.Now;
        public string Details { get; set; }
        public User User { get; set; }
    }

}
