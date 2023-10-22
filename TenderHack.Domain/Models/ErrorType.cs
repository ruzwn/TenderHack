using TenderHack.Domain.Common;

namespace TenderHack.Domain.Models;

public class ErrorType : BaseEntity<Guid>
{
    public string DisplayName { get; set; }
    public string Log { get; set; }
    public bool IsSystem { get; set; }

    // For EF Core
    private ErrorType()
    {
    }

    public ErrorType(string displayName, string log, bool isSystem)
    {
        Id = Guid.NewGuid();
        DisplayName = displayName;
        Log = log;
        IsSystem = isSystem;
    }
}
