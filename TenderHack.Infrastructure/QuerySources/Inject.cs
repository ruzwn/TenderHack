using Microsoft.Extensions.DependencyInjection;
using TenderHack.BLL.QuerySources;

namespace TenderHack.Infrastructure.QuerySources;

public static class Inject
{
    public static void AddQuerySources(this IServiceCollection services)
    {
        services.AddScoped<IObjectQuerySource, ObjectQuerySource>();
    }
}
