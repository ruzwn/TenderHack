namespace TenderHack.BLL.Responses.Errors;

public class ErrorListResponse
{
    public Guid Id { get; set; }
    
    public Guid MetaId { get; set; }
    
    public DateTime Date { get; set; }
    
    public string Log { get; set; }
    
    public long? ClusterId { get; set; }
}