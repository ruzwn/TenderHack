using System.Reflection;
using Microsoft.OpenApi.Models;
using TenderHack.BLL.Services;
using TenderHack.Hub;
using TenderHack.Infrastructure.Database;
using TenderHack.Infrastructure.Repositories;

namespace TenderHack;

internal static class Program
{
    internal static void Main(string[] args)
    {
        var builder = WebApplication.CreateBuilder(args);

        AppContext.SetSwitch("Npgsql.EnableLegacyTimestampBehavior", true);

        builder.Services.AddControllers();

        builder.Services.AddSwaggerGen(
            options =>
            {
                options.SwaggerDoc(
                    "v1",
                    new OpenApiInfo
                    {
                        Version = "v1",
                        Title = $"{nameof(TenderHack)} API",
                        Description = $"{nameof(TenderHack)} API description"
                    });

                var xmlFilename = $"{Assembly.GetExecutingAssembly().GetName().Name}.xml";
                options.IncludeXmlComments(Path.Combine(AppContext.BaseDirectory, xmlFilename));
            });

        builder.Services.AddDbContext<TenderHackDbContext>();
        builder.Services.AddSignalR();
        builder.Services.AddRepositories();
        builder.Services.AddServices();

        var app = builder.Build();

        app.UseCors(options => options.AllowAnyOrigin()
            .AllowAnyHeader()
            .AllowAnyMethod()
        );
        
        if (app.Environment.IsDevelopment())
        {
            app.UseSwagger();
            app.UseSwaggerUI(
                options =>
                {
                    options.SwaggerEndpoint("/swagger/v1/swagger.json", $"{nameof(TenderHack)} API v1");
                    options.RoutePrefix = string.Empty;
                });
        }

        app.UseHttpsRedirection();

        app.MapControllers();

        app.MapHub<NotificationHub>("/notificationHub");

        app.Run();
    }
}
