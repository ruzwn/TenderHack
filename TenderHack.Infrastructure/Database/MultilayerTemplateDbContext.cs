using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using TenderHack.Domain.Models;

namespace TenderHack.Infrastructure.Database;

public class MultilayerTemplateDbContext : DbContext
{
    private readonly IConfiguration _configuration;
    
    public DbSet<Log> Logs { get; set; }

    public MultilayerTemplateDbContext(IConfiguration configuration)
    {
        _configuration = configuration;
        
        Database.Migrate();
    }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseSqlite(_configuration.GetConnectionString("SqliteConnection"));
    }
    
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.ApplyConfigurationsFromAssembly(typeof(MultilayerTemplateDbContext).Assembly);
    }
}
