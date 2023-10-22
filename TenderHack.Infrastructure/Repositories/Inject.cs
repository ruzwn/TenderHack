using Microsoft.Extensions.DependencyInjection;

using TenderHack.BLL.Repositories;
using TenderHack.Domain.Models;

namespace TenderHack.Infrastructure.Repositories;

public static class Inject
{
	public static void AddRepositories(this IServiceCollection services)
	{
		services.AddScoped<IRepository<Error>, ErrorRepository>();
		services.AddScoped<IRepository<Cluster>, ClusterRepository>();
		services.AddScoped<IRepository<ErrorType>, ErrorTypeRepository>();
	}
}
