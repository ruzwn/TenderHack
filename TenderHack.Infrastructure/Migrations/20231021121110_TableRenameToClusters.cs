using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TenderHack.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class TableRenameToClusters : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Errors_Cluters_ClusterId",
                table: "Errors");

            migrationBuilder.DropForeignKey(
                name: "FK_Errors_Cluters_ClusterIfCentroidId",
                table: "Errors");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Cluters",
                table: "Cluters");

            migrationBuilder.RenameTable(
                name: "Cluters",
                newName: "Clusters");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Clusters",
                table: "Clusters",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Errors_Clusters_ClusterId",
                table: "Errors",
                column: "ClusterId",
                principalTable: "Clusters",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Errors_Clusters_ClusterIfCentroidId",
                table: "Errors",
                column: "ClusterIfCentroidId",
                principalTable: "Clusters",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Errors_Clusters_ClusterId",
                table: "Errors");

            migrationBuilder.DropForeignKey(
                name: "FK_Errors_Clusters_ClusterIfCentroidId",
                table: "Errors");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Clusters",
                table: "Clusters");

            migrationBuilder.RenameTable(
                name: "Clusters",
                newName: "Cluters");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Cluters",
                table: "Cluters",
                column: "Id");

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
    }
}
