var schedule = kendo.observable({
    Data: Schedule,
    init: function () {
        this.set("Data", new Schedule());
        return this;
    }
});

var Schedule = kendo.data.Model.define({
    id: "ListingId",
    fields: {
        "ListingId": { type: "number" },
        "TypeId": { type: "string", defaultValue: '0' },
        "InspectionDate": { type: "string", defaultValue: kendo.toString(kendo.parseDate(Date()), "MM/dd/yyyy")},
        "ClosingDate": { type: "string", defaultValue: kendo.toString(kendo.parseDate(Date()), "MM/dd/yyyy")},
        "Address1": { type: "string", defaultValue: "" },
        "Address2": { type: "string", defaultValue: "" },
        "City": { type: "string", defaultValue: "" },
        "State": { type: "string", defaultValue: "OH" },
        "Zip": { type: "string", defaultValue: "" },
        "County": { type: "string", defaultValue: "Montgomery" },
        "Enabled": {type:"bool", defaultValue: true}
    },

    fill: function () {
        try {
            var self = this;
            self.set("InspectionDate", kendo.toString(self.get("InspectionDate"), "MM/dd/yyyy"));
            self.set("ClosingDate", kendo.toString(self.get("ClosingDate"), "MM/dd/yyyy"));
            return self;
        }
        catch (err) { throw err; }
    },

    pack: function () {
        try {
            var self = this;
            self.set("InspectionDate", kendo.toString(self.get("InspectionDate"), "MM/dd/yyyy"));
            self.set("ClosingDate", kendo.toString(self.get("ClosingDate"), "MM/dd/yyyy"));
            var o = self.toJSON();
            return o;
        }
        catch (err) { throw err; }
    }
});