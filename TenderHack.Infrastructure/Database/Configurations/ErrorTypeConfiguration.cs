using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

using TenderHack.Domain.Models;

namespace TenderHack.Infrastructure.Database.Configurations;
public class ErrorTypeConfiguration : IEntityTypeConfiguration<ErrorType>
{
	public void Configure(EntityTypeBuilder<ErrorType> builder)
	{
		builder.HasMany(et => et.Errors)
			.WithOne(e => e.ErrorType)
			.HasForeignKey(e => e.ErrorTypeId);

		builder.HasKey(et => et.Id);
	}
}
