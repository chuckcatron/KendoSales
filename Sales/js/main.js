// Write your Javascript code.
var layout, router;

$(function(){
    layout = new kendo.Layout("layout-template");
    layout.render("#main");
    router = new kendo.Router({
        routeMissing: function(e) {
            console.log('route missing for: ' + e.url);
        }
    });
    router.route("create", function() {
        navigationModel.loadCreate();
    });
    router.route("schedule", function() {
        navigationModel.loadSchedule();
    });
    router.route("home", function() {
        navigationModel.loadHome();
    });
    router.route("/", function() {
        navigationModel.loadHome();
    });

    router.start();
});