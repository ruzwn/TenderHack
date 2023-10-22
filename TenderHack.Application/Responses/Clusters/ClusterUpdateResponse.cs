namespace TenderHack.BLL.Responses.Clusters;

public class ClusterUpdateResponse
{
    public long Id { get; set; }
    
    public string DisplayName { get; set; }
    
    public string Description { get; set; }
    
    public bool IsResolved { get; set; }
}