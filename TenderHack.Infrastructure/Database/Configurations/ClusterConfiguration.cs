using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using TenderHack.Domain.Models;

namespace TenderHack.Infrastructure.Database.Configurations;

public class ClusterConfiguration : IEntityTypeConfiguration<Cluster>
{
	public void Configure(EntityTypeBuilder<Cluster> builder)
	{
		builder.HasMany(c => c.Errors)
			.WithOne(e => e.Cluster)
			.HasForeignKey(e => e.ClusterId);

		builder.HasOne(c => c.Centroid)
			.WithOne(c => c.ClusterIfCentroid)
			.HasForeignKey<Error>(e => e.ClusterIfCentroidId);
	}
}