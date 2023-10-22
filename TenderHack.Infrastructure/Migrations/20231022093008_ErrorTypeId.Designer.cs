﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;
using TenderHack.Infrastructure.Database;

#nullable disable

namespace TenderHack.Infrastructure.Migrations
{
    [DbContext(typeof(TenderHackDbContext))]
    [Migration("20231022093008_ErrorTypeId")]
    partial class ErrorTypeId
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.12")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            NpgsqlModelBuilderExtensions.UseIdentityByDefaultColumns(modelBuilder);

            modelBuilder.Entity("ErrorUser", b =>
                {
                    b.Property<Guid>("ClustersId")
                        .HasColumnType("uuid");

                    b.Property<long>("UsersId")
                        .HasColumnType("bigint");

                    b.HasKey("ClustersId", "UsersId");

                    b.HasIndex("UsersId");

                    b.ToTable("ErrorUser");
                });

            modelBuilder.Entity("TenderHack.Domain.Models.Cluster", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<long>("Id"));

                    b.Property<Guid?>("CentroidId")
                        .HasColumnType("uuid");

                    b.Property<string>("Description")
                        .HasColumnType("text");

                    b.Property<string>("DisplayName")
                        .HasColumnType("text");

                    b.Property<string>("Recommendation")
                        .HasColumnType("text");

                    b.Property<bool>("Resolved")
                        .HasColumnType("boolean");

                    b.Property<DateTime>("ResolvedDate")
                        .HasColumnType("timestamp without time zone");

                    b.HasKey("Id");

                    b.ToTable("Clusters");
                });

            modelBuilder.Entity("TenderHack.Domain.Models.Error", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uuid");

                    b.Property<long?>("ClusterId")
                        .HasColumnType("bigint");

                    b.Property<long?>("ClusterIfCentroidId")
                        .HasColumnType("bigint");

                    b.Property<DateTime>("Date")
                        .HasColumnType("timestamp without time zone");

                    b.Property<Guid?>("ErrorTypeId")
                        .HasColumnType("uuid");

                    b.Property<string>("Log")
                        .HasColumnType("text");

                    b.Property<Guid>("MetaId")
                        .HasColumnType("uuid");

                    b.HasKey("Id");

                    b.HasIndex("ClusterId");

                    b.HasIndex("ClusterIfCentroidId")
                        .IsUnique();

                    b.HasIndex("ErrorTypeId");

                    b.ToTable("Errors");
                });

            modelBuilder.Entity("TenderHack.Domain.Models.ErrorType", b =>
                {
                    b.Property<Guid?>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uuid");

                    b.Property<string>("DisplayName")
                        .HasColumnType("text");

                    b.Property<bool>("IsSystem")
                        .HasColumnType("boolean");

                    b.Property<string>("Log")
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.ToTable("ErrorTypes");
                });

            modelBuilder.Entity("TenderHack.Domain.Models.User", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<long>("Id"));

                    b.HasKey("Id");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("ErrorUser", b =>
                {
                    b.HasOne("TenderHack.Domain.Models.Error", null)
                        .WithMany()
                        .HasForeignKey("ClustersId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("TenderHack.Domain.Models.User", null)
                        .WithMany()
                        .HasForeignKey("UsersId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("TenderHack.Domain.Models.Error", b =>
                {
                    b.HasOne("TenderHack.Domain.Models.Cluster", "Cluster")
                        .WithMany("Errors")
                        .HasForeignKey("ClusterId");

                    b.HasOne("TenderHack.Domain.Models.Cluster", "ClusterIfCentroid")
                        .WithOne("Centroid")
                        .HasForeignKey("TenderHack.Domain.Models.Error", "ClusterIfCentroidId");

                    b.HasOne("TenderHack.Domain.Models.ErrorType", "ErrorType")
                        .WithMany("Errors")
                        .HasForeignKey("ErrorTypeId");

                    b.Navigation("Cluster");

                    b.Navigation("ClusterIfCentroid");

                    b.Navigation("ErrorType");
                });

            modelBuilder.Entity("TenderHack.Domain.Models.Cluster", b =>
                {
                    b.Navigation("Centroid");

                    b.Navigation("Errors");
                });

            modelBuilder.Entity("TenderHack.Domain.Models.ErrorType", b =>
                {
                    b.Navigation("Errors");
                });
#pragma warning restore 612, 618
        }
    }
}