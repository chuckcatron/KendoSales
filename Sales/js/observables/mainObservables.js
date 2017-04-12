var buildingStyleModel = kendo.observable({
    styles: [],
    load: function () {
        var d = $.Deferred();
        buildingStyleDS.read().then(function () {
            d.resolve("building styles");
        });
        return d.promise();
    },

    fetch: function (styleId) {
        return buildingStyleDS.get(styleid);
    }
});