var audit = kendo.observable({
    Data: Audit,
    costCenterMask: "9999999",
    locked: true,
    auditTypes: new kendo.data.DataSource({
        data: [
            { AuditId: '0', AuditName: "Select"},
            { AuditId: 'F', AuditName: "Auditors Partial Audit"},
            { AuditId: 'A', AuditName: "DM Full Audit"},
            { AuditId: 'P', AuditName: "Auditors Partial Audit"},
            { AuditId: 'C', AuditName: "DM Partial Audit"},
            { AuditId: 'B', AuditName: "FIMS Partial Audit"}
        ]
    }),
    init: function () {
        this.set("Data", new Audit());
        return this;
    }
});

var Audit = kendo.data.Model.define({
    id: "AuditId",
    fields: {
        "AuditId": { type: "number" },
        "CostCenterId": { type: "string", defaultValue: "000" },
        "StoreType": { type: "string", defaultValue: "UNKN" },
        "StartDateTime": { type: "date" },
        "FinishDateTime": { type: "date" },
        "Auditor": { type: "string", defaultValue: "Chuck Catron" },
        "AuditorSupName": { type: "string", defaultValue: "Sheldon Cooper" },
        "AuditTypeId": { type: "string", defaultValue: '0' },
        "LastFullAudit": { type: "string", defaultValue: kendo.toString(kendo.parseDate(Date()), "MM/dd/yyyy")},
        "LastPartialAudit": { type: "string", defaultValue: kendo.toString(kendo.parseDate(Date()), "MM/dd/yyyy")},
        "GeneralManager": { type: "string", defaultValue: "Raj Koothrappali" },
        "GMArrival": { type: "string", defaultValue: kendo.toString(kendo.parseDate(Date()), "hh:mm tt")},
        "DistrictManager": { type: "string", defaultValue: "Leonard Hofstadter" },
        "RegionManager": { type: "string", defaultValue: "Howard Wolowitz" },
        "Locked": { type: "bool", defaultValue: true },
        "Enabled": { type: "bool", defaultValue: false }
    },

    fill: function () {
        try {
            var self = this;
            self.set("StartDateTime", kendo.toString(self.get("StartDateTime"), "MM/dd/yyyy"));
            self.set("FinishDateTime", kendo.toString(self.get("FinishDateTime"), "MM/dd/yyyy"));
            self.set("LastFullAudit", kendo.toString(self.get("LastFullAudit"), "MM/dd/yyyy"));
            self.set("LastPartialAudit", kendo.toString(self.get("LastPartialAudit"), "MM/dd/yyyy"));
            return self;
        }
        catch (err) { throw err; }
    },

    pack: function () {
        try {
            var self = this;
            self.set("StartDateTime", kendo.toString(self.get("StartDateTime"), "MM/dd/yyyy"));
            self.set("FinishDateTime", kendo.toString(self.get("FinishDateTime"), "MM/dd/yyyy"));
            var o = self.toJSON();
            return o;
        }
        catch (err) { throw err; }
    },

    ValidateCostCenter: function () {
        var self = this;
        var data = self.get("Data");
        var costCenterId = data.get("CostCenterId").replace("_", "");

        if (costCenterId.length === 7) {
            data.set("Enabled", true);

        } else {
            data.set("Enabled", false);

        }

        data.set("Locked", false);
        data.set("Locked", true);
        self.set("Data", data);
    }
});