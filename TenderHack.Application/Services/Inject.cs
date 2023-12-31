﻿using Microsoft.Extensions.DependencyInjection;
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

        services.AddTransient<IGetClusterRequest, GetClusterRequest>();
        services.AddTransient<IGetStatisticsOfWeekRequest, GetStatisticsOfWeekRequest>();
        services.AddTransient<IListClusterRequest, ListClusterRequest>();
        services.AddTransient<IStatisticByDateService, StatisticsByDateService>();
        services.AddTransient<IParseService, ParseService>();
        services.AddTransient<IClusterUpdateRequest, ClusterUpdateRequest>();
        services.AddTransient<IListErrorRequest, ListErrorRequest>();
        services.AddTransient<IGetStatisticsOfSolvedClustersByDatesRequest,
            GetStatisticsOfSolvedClustersByDatesRequest>();
        services.AddTransient<IGetStatisticsOfErrorCountByDatesRequest,
            GetStatisticsOfErrorCountByDatesRequest>();
    }
}
