using TenderHack.BLL.Responses.Statistics;
using TenderHack.Domain.Models;

namespace TenderHack.BLL.Responses.Clusters;

public class ClusterGetResponse
{
    public long Id { get; set; }
    
    public string DisplayName { get; set; }
    
    public int ErrorCount { get; set; }
    
    public List<ErrorsByHourDto> ErrorByHourStatistics { get; set; }
    
    public List<ErrorsByHourDto> PreviousErrorsByHourStatistics { get; set; }
    
    public List<ErrorAbbreviatedDto> LastErrors { get; set; }
    
    public string ErrorTypeName { get; set; }
    
    public string Description { get; set; }
    
    public string Recommendation { get; set; }
    
    public bool Resolved { get; set; }
    
    public DateTime ResolvedDate { get; set; }
}

public class DemoResponse : ClusterGetResponse
{
    public string ErrorLog { get; set; }
}

public static class ClusterGetResponseMapping
{
    public static DemoResponse ToDto(this Cluster cluster)
    {
        return new DemoResponse
        {
            Id = cluster.Id,
            DisplayName = cluster.DisplayName,
            ErrorCount = cluster.Errors.Count, 
            
            ErrorTypeName = cluster.Errors.FirstOrDefault()?
                .ErrorType?.DisplayName,
            Description = cluster.Description, 
            Recommendation = cluster.Recommendation, 
            Resolved = cluster.Resolved, 
            ResolvedDate = cluster.ResolvedDate
        };
    }
}