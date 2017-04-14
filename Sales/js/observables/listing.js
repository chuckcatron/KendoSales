var listing = kendo.observable({
    Data: Listing,
    listingTypes: new kendo.data.DataSource({
        data: [
            { TypeId: '0', TypeName: "Select"},
            { TypeId: 'C', TypeName: "Commercial"},
            { TypeId: 'R', TypeName: "Residential"}
        ]
    }),
    states: new kendo.data.DataSource({
        data: states
    }),
    county: new kendo.data.DataSource({
        data: counties
    }),
    buildingStyleData: buildingStyleDS,
    counts: new kendo.data.DataSource({
        data: counts
    }),
    init: function () {
        this.set("Data", new Listing());
        return this;
    }
});