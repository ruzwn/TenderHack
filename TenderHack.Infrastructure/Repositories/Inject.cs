using Microsoft.Extensions.DependencyInjection;
using TenderHack.BLL.Repositories;

namespace TenderHack.Infrastructure.Repositories;

public static class Inject
{
    public static void AddRepositories(this IServiceCollection services)
    {
        services.AddScoped<IRepository<object>, ObjectRepository>();
    }
}
