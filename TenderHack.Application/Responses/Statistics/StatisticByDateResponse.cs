namespace TenderHack.BLL.Responses.Statistics;

public class StatisticByDateResponse
{
    public int TotalErrorCount { get; set; }
    
    public int TotalClusterCount { get; set; }
    
    public List<ClusterWithAbbreviatedErrorsDto> Clusters { get; set; }
}