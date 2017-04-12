var navigationModel = kendo.observable({
    view: "",
    homeClicked: function(e) {
        if (e !== undefined) {
            e.preventDefault();
        }
        router.navigate("home", true);
        navigationModel.loadHome();
    },
    loadHome: function() {
        //loaderModel.show();
        $.ajax({ url: '../../pages/home.html', cache: false })
            .done(function(template) {
                layout.showIn("#main-layout", new kendo.View(template));
                loadChart();
                console.log("navigation.loadHome complete");
            })
            .always(function() {
                //$("#gallery-layout").empty();
                //$("#ulNavigation>li").removeClass("active");
                //$("#liHome").addClass("active");

                //loaderModel.hide();
            });
    },
    createClicked: function(e) {
        if (e !== undefined) {
            e.preventDefault();
        }
        router.navigate("create", true);
        navigationModel.loadCreate();
    },
    loadCreate: function() {
        //loaderModel.show();
        $.ajax({ url: '../../pages/create.html', cache: false })
            .done(function(template) {
                layout.showIn("#main-layout", new kendo.View(template, { model: listing.init(), evalTemplate: true }));
                console.log("navigation.loadCreate complete");
            })
            .always(function() {
                //$("#gallery-layout").empty();
                //$("#ulNavigation>li").removeClass("active");
                //$("#liHome").addClass("active");

                //loaderModel.hide();
            });
    },
    scheduleClicked: function (e) {
        if (e !== undefined) {
            e.preventDefault();
        }
        router.navigate("schedule", true);
        navigationModel.loadSchedule();
    },
    loadSchedule: function () {
        //loaderModel.show();
        $.ajax({ url: '../../pages/schedule.html', cache: false })
            .done(function (template) {
                layout.showIn("#main-layout", new kendo.View(template, { model: schedule.init(), evalTemplate: true }));
                console.log("navigation.loadSchedule complete");
            })
            .always(function () {
                //$("#gallery-layout").empty();
                //$("#ulNavigation>li").removeClass("active");
                //$("#liHome").addClass("active");

                //loaderModel.hide();
            });
    }
});