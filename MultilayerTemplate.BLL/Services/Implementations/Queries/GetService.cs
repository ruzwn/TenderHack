using MultilayerTemplate.BLL.Services.Interfaces.Queries;

namespace MultilayerTemplate.BLL.Services.Implementations.Queries;

public class GetService : IGetService
{
    public Task<int> HandleAsync(int request, CancellationToken cancellationToken)
    {
        throw new NotImplementedException();
    }
}
