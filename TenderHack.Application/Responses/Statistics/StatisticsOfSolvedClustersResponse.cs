namespace TenderHack.BLL.Responses.Statistics;

public class StatisticsOfSolvedClustersResponse
{
    public DateOnly Date { get; set; }
    
    public int SolvedClustersCount { get; set; }
}