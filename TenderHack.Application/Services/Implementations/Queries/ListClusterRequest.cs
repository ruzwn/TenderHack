using TenderHack.BLL.Repositories;
using TenderHack.BLL.Requests;
using TenderHack.BLL.Responses.Clusters;
using TenderHack.BLL.Services.Interfaces.Queries;
using TenderHack.BLL.Specifications;
using TenderHack.Domain.Models;

namespace TenderHack.BLL.Services.Implementations.Queries;

public class ListClusterRequest : IListClusterRequest
{
    private readonly IRepository<Cluster> _clusterRepository;

    public ListClusterRequest(IRepository<Cluster> clusterRepository)
    {
        _clusterRepository = clusterRepository;
    }

    public async Task<List<ClusterListResponse>> HandleAsync(
        ListRequest request, CancellationToken cancellationToken = default)
    {
        return (await _clusterRepository
                .GetManyAsync(new Specification<Cluster>(x => x.Errors.Any()), 
                    cancellationToken))
            .Skip(request.PageNumber * 25)
            .Take(25)
            .Select(x => new ClusterListResponse
            {
                Id = x.Id, 
                DisplayName = x.DisplayName
            })
            .ToList();
    }
}