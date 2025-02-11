using backend.Constants;
using backend.Data.Models;
using Microsoft.EntityFrameworkCore;

namespace backend.Data.Seeds
{
    public static class AuditEventSeeder
    {
        public static void SeedAuditEvent(this ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<AuditEvent>().HasData(
                new AuditEvent
                {
                    Id = 1,
                    Name = "UserLoggedIn",
                    TypeId = AuditEventTypesConstants.Session,
                    Description = "A user successfully logged in."
                },
                new AuditEvent
                {
                    Id = 2,
                    Name = "UserLoggedOut",
                    TypeId = AuditEventTypesConstants.Session,
                    Description = "A user logged out."
                },
                new AuditEvent
                {
                    Id = 3,
                    Name = "RecordPlayed",
                    TypeId = AuditEventTypesConstants.Recording,
                    Description = "A new record was played."
                },
                new AuditEvent
                {
                    Id = 4,
                    Name = "RecordExported",
                    TypeId = AuditEventTypesConstants.Recording,
                    Description = "An existing record was exported."
                },
                new AuditEvent
                {
                    Id = 5,
                    Name = "RecordDeleted",
                    TypeId = AuditEventTypesConstants.Recording,
                    Description = "A record was deleted."
                },
                new AuditEvent
                {
                    Id = 6,
                    Name = "TokenRefreshed",
                    TypeId = AuditEventTypesConstants.Session,
                    Description = "A token was refreshed. The old token is now invalid."
                },
                new AuditEvent
                {
                    Id = 7,
                    Name = "ManualSync",
                    TypeId = AuditEventTypesConstants.Recording,
                    Description = "A manual sync was performed."
                },
                new AuditEvent
                {
                    Id = 8,
                    Name = "AutoSync",
                    TypeId = AuditEventTypesConstants.Recording,
                    Description = "An auto sync was performed."
                }
            );
        }
    }
}