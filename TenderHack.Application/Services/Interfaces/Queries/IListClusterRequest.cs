using TenderHack.BLL.Requests;
using TenderHack.BLL.Responses.Clusters;

namespace TenderHack.BLL.Services.Interfaces.Queries;

public interface IListClusterRequest : IService<ListRequest, List<ClusterListResponse>>
{
    
}