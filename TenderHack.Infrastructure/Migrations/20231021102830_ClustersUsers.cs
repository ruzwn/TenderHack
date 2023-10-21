using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TenderHack.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class ClustersUsers : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<long>(
                name: "ClusterId",
                table: "Errors",
                type: "INTEGER",
                nullable: true);

            migrationBuilder.AddColumn<long>(
                name: "ClusterIfCentroidId",
                table: "Errors",
                type: "INTEGER",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "Cluters",
                columns: table => new
                {
                    Id = table.Column<long>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    CentroidId = table.Column<Guid>(type: "TEXT", nullable: true),
                    DisplayName = table.Column<string>(type: "TEXT", nullable: true),
                    Description = table.Column<string>(type: "TEXT", nullable: true),
                    Recommendation = table.Column<string>(type: "TEXT", nullable: true),
                    Resolved = table.Column<bool>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Cluters", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    Id = table.Column<long>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "ErrorUser",
                columns: table => new
                {
                    ClustersId = table.Column<Guid>(type: "TEXT", nullable: false),
                    UsersId = table.Column<long>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ErrorUser", x => new { x.ClustersId, x.UsersId });
                    table.ForeignKey(
                        name: "FK_ErrorUser_Errors_ClustersId",
                        column: x => x.ClustersId,
                        principalTable: "Errors",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ErrorUser_Users_UsersId",
                        column: x => x.UsersId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Errors_ClusterId",
                table: "Errors",
                column: "ClusterId");

            migrationBuilder.CreateIndex(
                name: "IX_Errors_ClusterIfCentroidId",
                table: "Errors",
                column: "ClusterIfCentroidId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_ErrorUser_UsersId",
                table: "ErrorUser",
                column: "UsersId");

            migrationBuilder.AddForeignKey(
                name: "FK_Errors_Cluters_ClusterId",
                table: "Errors",
                column: "ClusterId",
                principalTable: "Cluters",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Errors_Cluters_ClusterIfCentroidId",
                table: "Errors",
                column: "ClusterIfCentroidId",
                principalTable: "Cluters",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Errors_Cluters_ClusterId",
                table: "Errors");

            migrationBuilder.DropForeignKey(
                name: "FK_Errors_Cluters_ClusterIfCentroidId",
                table: "Errors");

            migrationBuilder.DropTable(
                name: "Cluters");

            migrationBuilder.DropTable(
                name: "ErrorUser");

            migrationBuilder.DropTable(
                name: "Users");

            migrationBuilder.DropIndex(
                name: "IX_Errors_ClusterId",
                table: "Errors");

            migrationBuilder.DropIndex(
                name: "IX_Errors_ClusterIfCentroidId",
                table: "Errors");

            migrationBuilder.DropColumn(
                name: "ClusterId",
                table: "Errors");

            migrationBuilder.DropColumn(
                name: "ClusterIfCentroidId",
                table: "Errors");
        }
    }
}
