using Microsoft.Extensions.DependencyInjection;
using TenderHack.BLL.Services.Implementations.Commands;
using TenderHack.BLL.Services.Implementations.Queries;
using TenderHack.BLL.Services.Interfaces.Commands;
using TenderHack.BLL.Services.Interfaces.Queries;

namespace TenderHack.BLL.Services;

public static class Inject
{
    public static void AddServices(this IServiceCollection services)
    {
        services.AddScoped<ISendEmailService, SendEmailService>();
        services.AddScoped<IGetLogsByIdsService, GetLogsByIdsService>();
        services.AddTransient<IImportService, ImportService>();
        services.AddTransient<ITrainService, TrainService>();
    }
}
