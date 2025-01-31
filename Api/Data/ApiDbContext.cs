using Microsoft.EntityFrameworkCore;

namespace Api.Models;

public class ApiDbContext : DbContext
{
    public ApiDbContext(DbContextOptions<ApiDbContext> options)
        : base(options)
    {
    }

    public DbSet<User> Users { get; set; } = null!;
    public DbSet<Recording> Recordings { get; set; } = null!;
    public DbSet<AuditLog> AuditLogs { get; set; } = null!;
}