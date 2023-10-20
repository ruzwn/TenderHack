using System.Reflection.Emit;
using System.Text;
using CsvReader;
using TenderHack.BLL.Repositories;
using TenderHack.BLL.Services.Interfaces.Commands;
using TenderHack.Domain.Models;

namespace TenderHack.BLL.Services.Implementations.Commands;

/// <inheritdoc cref="IImportService"/>
public class ImportService : IImportService
{
    private readonly IRepository<Log> _logRepository;

    public ImportService(IRepository<Log> logRepository)
    {
        _logRepository = logRepository;
    }

    public async Task Execute(byte[] fileData, CancellationToken cancellationToken)
    {
        var data = GetData(fileData);

        var entitiesToCreate = ProcessData(data);

        await _logRepository.AddRangeAsync(entitiesToCreate, cancellationToken);
    }

    private List<RawRowModel> GetData(byte[] fileData)
    {
        using var memoryStream = new MemoryStream(fileData);
        using var fileReader = new StreamReader(memoryStream);
        using var csv = new CachedCsvReader(fileReader, true, ';');

        var headers = csv
            .GetFieldHeaders()
            .ToList();
        if (!headers.Any())
        {
            throw new ArgumentException("Invalid csv");
        }

        return csv
            .Select(row => new RawRowModel(
                row[0],
                row[1],
                row[2]
            ))
            .ToList();
    }

    private List<Log> ProcessData(List<RawRowModel> data)
    {
        return data
            .Select(x =>
            {
                var dataUtfBytes = Encoding.UTF8.GetBytes(x.LogMessage);

                return new Log(x.LogId, x.Date, Encoding.UTF8.GetString(dataUtfBytes));
            })
            .ToList();
    }

    private record RawRowModel(string LogId, string Date, string LogMessage);
}