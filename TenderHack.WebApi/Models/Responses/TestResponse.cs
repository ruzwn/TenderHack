namespace TenderHack.Models.Responses;

public class TestResponse
{
    public Guid Id { get; set; }
    
    public Guid MetaId { get; set; }
    
    public DateTime Date { get; set; }
    
    public string Message { get; set; }

    public string Name { get; set; }
}