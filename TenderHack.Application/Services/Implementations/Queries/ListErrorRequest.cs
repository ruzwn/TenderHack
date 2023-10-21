using TenderHack.BLL.Repositories;
using TenderHack.BLL.Requests;
using TenderHack.BLL.Responses.Errors;
using TenderHack.BLL.Services.Interfaces.Queries;
using TenderHack.BLL.Specifications;
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
        return (await _errorRepository.GetManyAsync(new Specification<Error>(x => x.Log.Length > 0), cancellationToken))
            .Skip(request.PageNumber * 25)
            .Take(25)
            .Select(x => new ErrorListResponse
            {
                Id = x.Id, 
                MetaId = x.MetaId,
                Date = x.Date,
                Log = x.Log
            })
            .ToList();
    }
}