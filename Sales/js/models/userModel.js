var User = kendo.data.Model.define({
    id: "EmployeeId",
    fields: {
        "EmployeeFirstName": { type: "string" },
        "EmployeeLastName": { type: "string" },
        "Name": { type: "string" },
        "PIC": { type: "string" },
        "MA09UnrestrictedViewer": { type: "bool" },
        "MA09Application": { type: "bool" },
        "MA09Viewer": { type: "bool" },
        "MA09Approver": { type: "bool" },
        "ConnectionId": { type: "string" }
    },
    fullName: function() {
        return this.get("EmployeeFirstName") + " " + this.get("EmployeeLastName");
    },
    hasAccess: function () {
        //return false;
        return this.get("MA09Application") || this.get("MA09Viewer") || this.get("MA09Approver");;
    },
    canUpdate: function () {
        //return false;
        return this.get("MA09Application");
    },
    canClone: function () {
        //return false;
        return this.get("MA09Application");
    },
    canDelete: function () {
        //return false;
        return this.get("MA09Application");
    },
    canApprove: function () {
        return false;
        //return this.get("MA09Approver");
    },
    canDownload: function () {
        //return false;
        return this.get("MA09Application") || this.get("MA09Viewer");
    },
    canRunReport: function () {
        //return false;
        return this.get("MA09Application");
    },
    canCreateJournalEntry: function () {
        //return false;
        return this.get("MA09Application");
    }
});