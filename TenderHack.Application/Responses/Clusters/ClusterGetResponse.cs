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
    
    public string Description { get; set; }
    
    public string Recommendation { get; set; }
    
    public bool Resolved { get; set; }
    
    public DateTime ResolvedDate { get; set; }
}

public static class ClusterGetResponseMapping
{
    public static ClusterGetResponse ToDto(this Cluster cluster)
    {
        return new ClusterGetResponse
        {
            Id = cluster.Id,
            DisplayName = cluster.DisplayName,
            ErrorCount = cluster.Errors.Count, 
            
            Description = cluster.Description, 
            Recommendation = cluster.Recommendation, 
            Resolved = cluster.Resolved, 
            ResolvedDate = cluster.ResolvedDate
        };
    }
}