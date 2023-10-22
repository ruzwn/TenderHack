using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using TenderHack.Domain.Models;

namespace TenderHack.Infrastructure.Database;

public sealed class TenderHackDbContext : DbContext
{
    private readonly IConfiguration _configuration;
    
    public DbSet<ErrorType> ErrorTypes { get; set; }
    public DbSet<Error> Errors { get; set; }
    public DbSet<Cluster> Clusters { get; set; }
    
    public DbSet<User> Users { get; set; }

    public TenderHackDbContext(IConfiguration configuration)
    {
        _configuration = configuration;
        
        Database.Migrate();
    }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        // optionsBuilder.UseSqlite(_configuration.GetConnectionString("SqliteConnection"));
        optionsBuilder.UseNpgsql(_configuration.GetConnectionString("TenderHackDatabase"));
    }
    
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.ApplyConfigurationsFromAssembly(typeof(TenderHackDbContext).Assembly);
    }
}
