var Listing = kendo.data.Model.define({
    id: "ListingId",
    fields: {
        "ListingId": { type: "number" },
        "Address1": { type: "string", defaultValue: "" },
        "Address2": { type: "string", defaultValue: "" },
        "City": { type: "string", defaultValue: "" },
        "State": { type: "string", defaultValue: "OH" },
        "Zip": { type: "string", defaultValue: "" },
        "County": { type: "string", defaultValue: "Montgomery" },
        "ListingType": { type: "string", defaultValue: "R" },
        "Description": { type: "string", defaultValue: "" },
        "MeetupDate": { type: "date" },
        "GoLiveDate": { type: "date" },
        "InspectionDate": { type: "date" },
        "ClosingDate": { type: "date" },
        "Beds": { type: "string", defaultValue: "0" },
        "Baths": { type: "string", defaultValue: "0" },
        "SquareFoot": { type: "number", defaultValue: 0 },
        "Style": { type: "number", defaultValue: 0 },
    },

    fill: function () {
        try {
            var self = this;
            self.set("MeetupDate", kendo.toString(self.get("MeetupDate"), "MM/dd/yyyy"));
            self.set("GoLiveDate", kendo.toString(self.get("GoLiveDate"), "MM/dd/yyyy"));
            self.set("InspectionDate", kendo.toString(self.get("InspectionDate"), "MM/dd/yyyy"));
            self.set("ClosingDate", kendo.toString(self.get("ClosingDate"), "MM/dd/yyyy"));
            return self;
        }
        catch (err) { throw err; }
    },

    pack: function () {
        try {
            var self = this;
            self.set("MeetupDate", kendo.toString(self.get("MeetupDate"), "MM/dd/yyyy"));
            self.set("GoLiveDate", kendo.toString(self.get("GoLiveDate"), "MM/dd/yyyy"));
            self.set("InspectionDate", kendo.toString(self.get("InspectionDate"), "MM/dd/yyyy"));
            self.set("ClosingDate", kendo.toString(self.get("ClosingDate"), "MM/dd/yyyy"));
            var o = self.toJSON();
            return o;
        }
        catch (err) { throw err; }
    }
});