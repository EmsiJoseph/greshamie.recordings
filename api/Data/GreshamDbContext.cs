using gresham.Models;
using Microsoft.EntityFrameworkCore;

namespace gresham.Data
{
    public class GreshamDbContext
    {
        public GreshamDbContext(DbContextOptions<GreshamDbContext> options)
            : base(options)
        {
        }

        public DbSet<Recording> Recordings { get; set; }
        public DbSet<AuditLog> AuditLogs { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Configure relationships and any additional configuration
            modelBuilder.Entity<AuditLog>()
                .HasOne(a => a.User)
                .WithMany()
                .HasForeignKey(a => a.UserId);
        }
    }

}
