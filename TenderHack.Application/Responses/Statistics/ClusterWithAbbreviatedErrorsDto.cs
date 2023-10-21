namespace TenderHack.BLL.Responses.Statistics;

public class ClusterWithAbbreviatedErrorsDto
{
    public long Id { get; set; }
    
    public string DisplayName { get; set; }
    
    public int ErrorCount { get; set; }
}