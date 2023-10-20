using System.Reflection;
using Microsoft.OpenApi.Models;
using MultilayerTemplate.BLL.Services;
using MultilayerTemplate.Infrastructure.QuerySources;
using MultilayerTemplate.Infrastructure.Repositories;

namespace MultilayerTemplate;

internal static class Program
{
    internal static void Main(string[] args)
    {
        var builder = WebApplication.CreateBuilder(args);

        builder.Services.AddControllers();

        builder.Services.AddSwaggerGen(
            options =>
            {
                options.SwaggerDoc(
                    "v1",
                    new OpenApiInfo
                    {
                        Version = "v1",
                        Title = $"{nameof(MultilayerTemplate)} API",
                        Description = $"{nameof(MultilayerTemplate)} API description"
                    });

                var xmlFilename = $"{Assembly.GetExecutingAssembly().GetName().Name}.xml";
                options.IncludeXmlComments(Path.Combine(AppContext.BaseDirectory, xmlFilename));
            });

        builder.Services.AddRepositories();
        builder.Services.AddQuerySources();
        builder.Services.AddServices();

        var app = builder.Build();

        if (app.Environment.IsDevelopment())
        {
            app.UseSwagger();
            app.UseSwaggerUI(
                options =>
                {
                    options.SwaggerEndpoint("/swagger/v1/swagger.json", $"{nameof(MultilayerTemplate)} API v1");
                    options.RoutePrefix = string.Empty;
                });
        }

        app.UseHttpsRedirection();

        app.MapControllers();

        app.Run();
    }
}
