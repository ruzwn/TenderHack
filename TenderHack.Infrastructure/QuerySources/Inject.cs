using Microsoft.Extensions.DependencyInjection;
using MultilayerTemplate.BLL.QuerySources;

namespace MultilayerTemplate.Infrastructure.QuerySources;

public static class Inject
{
    public static void AddQuerySources(this IServiceCollection services)
    {
        services.AddScoped<IObjectQuerySource, ObjectQuerySource>();
    }
}
