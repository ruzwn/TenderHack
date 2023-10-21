using TenderHack.BLL.Responses.Statistics;

namespace TenderHack.BLL.Responses.Clusters;

public class ClusterGetResponse
{
    public long Id { get; set; }
    
    public string DisplayName { get; set; }
    
    public int ErrorCount { get; set; }
    
    public List<ErrorsByHourDto> ErrorByHourStatistics { get; set; }
    
    public List<ErrorsByHourDto> PreviousErrorsByHourStatistics { get; set; }
    
    public List<ErrorAbbreviatedDto> LastErrors { get; set; }
}