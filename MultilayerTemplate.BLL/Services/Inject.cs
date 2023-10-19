using Microsoft.Extensions.DependencyInjection;
using MultilayerTemplate.BLL.Services.Implementations.Commands;
using MultilayerTemplate.BLL.Services.Implementations.Queries;
using MultilayerTemplate.BLL.Services.Interfaces.Commands;
using MultilayerTemplate.BLL.Services.Interfaces.Queries;

namespace MultilayerTemplate.BLL.Services;

public static class Inject
{
    public static void AddServices(this IServiceCollection services)
    {
        services.AddScoped<IGetService, GetService>();
        services.AddScoped<IPostService, PostService>();
    }
}
