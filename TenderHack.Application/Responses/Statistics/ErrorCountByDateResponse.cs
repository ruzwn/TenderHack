namespace TenderHack.BLL.Responses.Statistics;

public class ErrorCountByDateResponse
{
    public DateOnly Date { get; set; }
    
    public int Count { get; set; }
}