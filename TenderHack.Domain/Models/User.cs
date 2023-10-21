using TenderHack.Domain.Common;

namespace TenderHack.Domain.Models
{
	public class User : BaseEntity<long>
	{
		public List<Error> Clusters { get; set; }

		string Email { get; set; }
	}
}
