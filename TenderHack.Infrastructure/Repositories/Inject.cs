﻿using Microsoft.Extensions.DependencyInjection;
using TenderHack.BLL.Repositories;
using TenderHack.BLL.Services;
using TenderHack.Domain.Models;

namespace TenderHack.Infrastructure.Repositories;

public static class Inject
{
    public static void AddRepositories(this IServiceCollection services)
    {
        services.AddScoped<IRepository<Log>, LogRepository>();
    }
}
