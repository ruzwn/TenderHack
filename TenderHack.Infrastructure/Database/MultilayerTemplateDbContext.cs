using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

namespace MultilayerTemplate.Infrastructure.Database;

public class MultilayerTemplateDbContext : DbContext
{
    protected readonly IConfiguration Configuration;

    public MultilayerTemplateDbContext(IConfiguration configuration)
    {
        Configuration = configuration;
    }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        // options.UseNpgsql(Configuration.GetConnectionString("MultilayerTemplateDatabase"));
    }
    
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.ApplyConfigurationsFromAssembly(typeof(MultilayerTemplateDbContext).Assembly);
    }
}
