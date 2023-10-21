using CsvReader;
using TenderHack.BLL.Services.Interfaces.Commands;

namespace TenderHack.BLL.Services.Implementations.Commands;

public class ParseService : IParseService
{
    public async Task<string> HandleAsync(byte[] request, CancellationToken cancellationToken = default)
    {
        using var memoryStream = new MemoryStream(request);
        using var streamReader = new StreamReader(memoryStream);
        using var csv = new CachedCsvReader(streamReader, true, ';');

        var headers = csv.GetFieldHeaders();
        if (!headers.Any())
        {
            throw new ArgumentException("Empty headers");
        }

        var logs = csv
            .Select(x => x[2])
            .ToList();

        var classes = logs
            .Select(x => x.Split(':', 2).First())
            .Distinct()
            .ToList();

        return string.Join(Environment.NewLine, classes);
    }
}