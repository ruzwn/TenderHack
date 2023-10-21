using System.ComponentModel.DataAnnotations.Schema;

using TenderHack.Domain.Common;

namespace TenderHack.Domain.Models
{
	public class Cluster : BaseEntity<long>
	{
		public List<Error> Errors { get; set; } = new List<Error>();

		public Guid? CentroidId { get; set; }
		public Error? Centroid { get; set; }

		public string? DisplayName { get; set; }
		public string? Description { get; set; }
		public string? Recommendation { get; set; }
		public bool Resolved { get; set; }
	}
}
