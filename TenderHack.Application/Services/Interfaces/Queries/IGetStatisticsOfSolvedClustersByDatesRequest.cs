using TenderHack.BLL.Requests.Statistics;
using TenderHack.BLL.Responses.Statistics;

namespace TenderHack.BLL.Services.Interfaces.Queries;

public interface IGetStatisticsOfSolvedClustersByDatesRequest : IService<BaseStatisticsRequest, List<StatisticsOfSolvedClustersResponse>>
{
}