using TenderHack.BLL.Repositories;
using TenderHack.BLL.Requests;
using TenderHack.BLL.Responses.Errors;
using TenderHack.BLL.Services.Interfaces.Queries;
using TenderHack.Domain.Models;

namespace TenderHack.BLL.Services.Implementations.Queries;

public class ListErrorRequest : IListErrorRequest
{
    private readonly IRepository<Error> _errorRepository;

    public ListErrorRequest(IRepository<Error> errorRepository)
    {
        _errorRepository = errorRepository;
    }

    public async Task<List<ErrorListResponse>> HandleAsync(ListRequest request, CancellationToken cancellationToken = default)
    {
        var baseQuery = await _errorRepository.GetManyAsQueryableAsync();
            
        var result = baseQuery
            .Where(x => x.ClusterId != null)
            .Skip(request.PageNumber * 25)
            .Take(25)
            .Select(x => new ErrorListResponse
            {
                Id = x.Id, 
                MetaId = x.MetaId,
                Date = x.Date,
                Log = x.Log,
                ClusterId = x.ClusterId
            })
            .ToList();

        return result;
    }
}