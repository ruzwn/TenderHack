using TenderHack.Domain.Common;

namespace TenderHack.Domain.Models;

public class Error : BaseEntity<Guid>
{
    public Guid MetaId { get; set; }
    
    public DateTime Date { get; set; }
    
    public string Log { get; set; }
    
    // For EF Core.
    private Error()
    {
    }

    public Error(string metaId, string dateTime, string message)
    {
        MetaId = Guid.Parse(metaId.ThrowIfNullOrEmpty());

        if (!DateTime.TryParse(dateTime, out var parsedTime))
        {
            throw new ArgumentException(null, nameof(dateTime));
        }

        Date = parsedTime;
        Log = message.ThrowIfNullOrEmpty();
    }
}