var total;

var rebatesList = new kendo.data.DataSource({
    transport: {
        read: {
            url: "sales/listings",
            contentType: "application/json"
        },
        parameterMap: function (data, operation) {
            return JSON.stringify(data);
        }
    },
    requestStart: function (e) {
        loaderModel.show();
    },
    requestEnd: function (e) {
    },
    error: function (e) {
        alert("Status: " + e.status + "; Error message: " + e.errorThrown);
    },
    pageSize: 20,
    serverPaging: true,
    serverFiltering: true,
    serverSorting: true,
    schema: {
        parse: function (response) {
            var listings = [];
            total = response.Total;
            for (var i = 0; i < response.Data.length; i++) {
                listings.push(new Listing(response.Data[i]).fill());
            }
            setTimeout(function () { loader.hide(); }, 1000);

            return listings;
        },
        total: function () {
            return total;
        },
        model: Listing
    }
});

var buildingStyleDS = new kendo.data.DataSource({
    transport: {
        read: {
            url: function () {
                return "sales/buildingstyles";
            }
        }
    },
    error: function (e) {
        // handle data operation error
        alert("Error: " + e.status + "; Error message: Problem loading Count Types");
    },
    schema: {
        model: CountType
    }
});