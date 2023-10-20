using System.Diagnostics.Tracing;
using TenderHack.Domain.Common;

namespace TenderHack.Domain.Models;

public class Log : BaseEntity<Guid>
{
    public Guid MetaId { get; set; }
    
    public DateTime Date { get; set; }
    
    public string Data { get; set; }
    
    // For EF Core.
    private Log()
    {
    }

    public Log(string metaId, string dateTime, string data)
    {
        MetaId = Guid.Parse(metaId.ThrowIfNullOrEmpty());

        if (!DateTime.TryParse(dateTime, out var parsedTime))
        {
            throw new ArgumentException(null, nameof(dateTime));
        }

        Date = parsedTime;
        Data = data.ThrowIfNullOrEmpty();
    }
}