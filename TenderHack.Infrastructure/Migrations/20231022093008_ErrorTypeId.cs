using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TenderHack.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class ErrorTypeId : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<Guid>(
                name: "ErrorTypeId",
                table: "Errors",
                type: "uuid",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Errors_ErrorTypeId",
                table: "Errors",
                column: "ErrorTypeId");

            migrationBuilder.AddForeignKey(
                name: "FK_Errors_ErrorTypes_ErrorTypeId",
                table: "Errors",
                column: "ErrorTypeId",
                principalTable: "ErrorTypes",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Errors_ErrorTypes_ErrorTypeId",
                table: "Errors");

            migrationBuilder.DropIndex(
                name: "IX_Errors_ErrorTypeId",
                table: "Errors");

            migrationBuilder.DropColumn(
                name: "ErrorTypeId",
                table: "Errors");
        }
    }
}
