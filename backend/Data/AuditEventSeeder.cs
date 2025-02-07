using Microsoft.EntityFrameworkCore;
using backend.Models;

namespace backend.Data
{
    public static class AuditEventSeeder
    {
        public static void Seed(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<AuditEvent>().HasData(
                new AuditEvent
                {
                    Id = 0,
                    Name = "UserLoggedIn",
                    Description = "A user successfully logged in."
                },
                new AuditEvent
                {
                    Id = 1,
                    Name = "UserLoggedOut",
                    Description = "A user logged out."
                },
                new AuditEvent
                {
                    Id = 2,
                    Name = "RecordPlayed",
                    Description = "A new record was played."
                },
                new AuditEvent
                {
                    Id = 3,
                    Name = "RecordExported",
                    Description = "An existing record was exported."
                },
                new AuditEvent
                {
                    Id = 4,
                    Name = "RecordDeleted",
                    Description = "A record was deleted."
                }
            );
        }
    }
}