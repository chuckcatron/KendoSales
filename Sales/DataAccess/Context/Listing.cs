//------------------------------------------------------------------------------
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
    using System.Collections.Generic;
    
    public partial class Listing
    {
        public int ListingId { get; set; }
        public string Address1 { get; set; }
        public string Address2 { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string Zip { get; set; }
        public string County { get; set; }
        public string ListingType { get; set; }
        public string Description { get; set; }
        public Nullable<System.DateTime> MeetupDate { get; set; }
        public Nullable<System.DateTime> GoLiveDate { get; set; }
        public Nullable<System.DateTime> InspectionDate { get; set; }
        public Nullable<System.DateTime> ClosingDate { get; set; }
        public Nullable<int> Beds { get; set; }
        public Nullable<decimal> Baths { get; set; }
        public Nullable<int> SquareFoot { get; set; }
        public string Style { get; set; }
        public int BuildingStyle_StyleId { get; set; }
    
        public virtual BuildingStyle BuildingStyle { get; set; }
    }
}
