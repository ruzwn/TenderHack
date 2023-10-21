namespace TenderHack.BLL.Requests.Clusters;

public class ClusterUpdateRequest
{
    public long Id { get; set; }
    
    public string Description { get; set; }
    
    public string Recommendation { get; set; }
    
    public bool Resolved { get; set; }
}