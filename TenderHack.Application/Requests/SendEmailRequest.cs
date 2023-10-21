namespace TenderHack.BLL.Requests;

public record SendEmailRequest(List<Guid> UserIds, EmailMessage Message);

public record EmailMessage
{
    public string Subject { get; set; }
    public string Body { get; set; }
}
