using TenderHack.BLL.Requests.Clusters;
using TenderHack.BLL.Responses;
using TenderHack.BLL.Responses.Clusters;

namespace TenderHack.BLL.Services.Interfaces.Commands;

public interface IClusterUpdateRequest : IService<ClusterUpdateRequest, EmptyResponse>
{
}