using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace BackendEmployee.Models;

public partial class EmployeeContext : DbContext
{
    public EmployeeContext()
    {
    }

    public EmployeeContext(DbContextOptions<EmployeeContext> options)
        : base(options)
    {
    }

    public virtual DbSet<EmployeList> EmployeLists { get; set; }

    public virtual DbSet<EmployeeNew> EmployeeNews { get; set; }
    public object Employee_New { get; internal set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<EmployeList>(entity =>
        {
            entity.HasKey(e => e.EmpId).HasName("PK__EmployeL__AF2DBB9946364B98");

            entity.Property(e => e.EmpId).ValueGeneratedNever();
            entity.Property(e => e.Department)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Email)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.Name)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.PhoneNo)
                .HasMaxLength(15)
                .IsUnicode(false);
            entity.Property(e => e.Salary).HasColumnType("decimal(10, 2)");
        });

        modelBuilder.Entity<EmployeeNew>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Employee__3214EC078344A491");

            entity.ToTable("Employee_New");

            entity.Property(e => e.Department)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Email)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.Name)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Salary).HasColumnType("decimal(10, 2)");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
