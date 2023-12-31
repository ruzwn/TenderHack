﻿using System.ComponentModel.DataAnnotations.Schema;

using TenderHack.Domain.Common;

namespace TenderHack.Domain.Models;

public class Error : BaseEntity<Guid>
{
	public Guid MetaId { get; set; }

	public DateTime Date { get; set; }

	public string Log { get; set; }

	[NotMapped]
	public string ProcessedLog { get; set; }

	public long? ClusterIfCentroidId { get; set; }
	public Cluster? ClusterIfCentroid { get; set; }

	public Guid? ErrorTypeId { get; set; }
	public ErrorType? ErrorType { get; set; }

	public long? ClusterId { get; set; }
	public Cluster? Cluster { get; set; }

	public List<User> Users { get; set; } = new List<User>();

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