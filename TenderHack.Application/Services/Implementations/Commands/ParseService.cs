using TenderHack.BLL.Services.Interfaces.Commands;

namespace TenderHack.BLL.Services.Implementations.Commands;

public class ParseService : IParseService
{
    public Task<string> HandleAsync(byte[] request, CancellationToken cancellationToken = default)
    {
        throw new NotImplementedException();
    }
}