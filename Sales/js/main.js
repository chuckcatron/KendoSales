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
    router.route("edit", function() {
        alert("Edit Audit");
    });
    router.route("view", function() {
        alert("View Audit");
    });
    router.route("delete", function() {
        alert("Delete Audit");
    });
    router.route("home", function() {
        navigationModel.loadHome();
    });
    router.route("/", function() {
        navigationModel.loadHome();
    });

    router.start();
});