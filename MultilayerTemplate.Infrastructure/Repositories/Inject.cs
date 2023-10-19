using Microsoft.Extensions.DependencyInjection;
using MultilayerTemplate.BLL.Repositories;

namespace MultilayerTemplate.Infrastructure.Repositories;

public static class Inject
{
    public static void AddRepositories(this IServiceCollection services)
    {
        services.AddScoped<IRepository<object>, ObjectRepository>();
    }
}
