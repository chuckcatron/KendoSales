﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Sales.DataAccess.Context
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    
    public partial class KendoSalesDBEntities : DbContext
    {
        public KendoSalesDBEntities()
            : base("name=KendoSalesDBEntities")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public virtual DbSet<Task> Tasks { get; set; }
        public virtual DbSet<User> Users { get; set; }
        public virtual DbSet<Listing> Listings { get; set; }
        public virtual DbSet<BuildingStyle> BuildingStyles { get; set; }
    }
}
