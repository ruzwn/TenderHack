namespace MultilayerTemplate.BLL.Services.Interfaces;

public interface IService<in TRequest, TResponse>
{
    Task<TResponse> HandleAsync(TRequest request, CancellationToken cancellationToken);
}
