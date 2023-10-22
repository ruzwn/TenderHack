using TenderHack.BLL.Repositories;
using TenderHack.BLL.Responses.Clusters;
using TenderHack.BLL.Services.Interfaces.Commands;
using TenderHack.BLL.Specifications;
using TenderHack.Domain.Models;

namespace TenderHack.BLL.Services.Implementations.Commands;

public class ClusterUpdateRequest : IClusterUpdateRequest
{
    private readonly IRepository<Cluster> _clusterRepository;
        
    public ClusterUpdateRequest(
        IRepository<Cluster> clusterRepository)
    {
        _clusterRepository = clusterRepository;
    }

    public async Task<ClusterUpdateResponse> HandleAsync(
        Requests.Clusters.ClusterUpdateRequest request,
        CancellationToken cancellationToken)
    {
        var entity = await _clusterRepository
            .GetOneAsync(new Specification<Cluster>(x => x.Id == request.Id),
                cancellationToken)
            ?? throw new ArgumentNullException("Not found");

        if (entity.Description != request.Description)
        {
            entity.Description = request.Description;
        }

        if (entity.Recommendation != request.Recommendation)
        {
            entity.Recommendation = request.Recommendation;
        }
        
        if (!entity.Resolved && request.Resolved)
        {
            entity.Resolved = request.Resolved;
            entity.ResolvedDate = DateTime.Today;
        }

        await _clusterRepository.UpdateAsync(entity, cancellationToken);

        return new ClusterUpdateResponse
        {
            Id = entity.Id, 
            DisplayName = entity.DisplayName, 
            Description = entity.Description, 
            IsResolved = entity.Resolved
        };
    }
}