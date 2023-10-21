namespace TenderHack.BLL.Requests;
public class ErrorRequest
{
	public string Id { get; set; }

	public DateTime Date { get; set; }
	public string Log { get; set; }

	public long UserId { get; set; }
}
