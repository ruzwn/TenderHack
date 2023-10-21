﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using TenderHack.Infrastructure.Database;

#nullable disable

namespace TenderHack.Infrastructure.Migrations
{
    [DbContext(typeof(TenderHackDbContext))]
    partial class TenderHackDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder.HasAnnotation("ProductVersion", "7.0.12");

            modelBuilder.Entity("TenderHack.Domain.Models.Error", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT");

                    b.Property<DateTime>("Date")
                        .HasColumnType("TEXT");

                    b.Property<string>("Log")
                        .HasColumnType("TEXT");

                    b.Property<Guid>("MetaId")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("Errors");
                });
#pragma warning restore 612, 618
        }
    }
}
