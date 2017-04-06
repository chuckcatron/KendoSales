kendo.data.binders.widget.mask = kendo.data.Binder.extend({
    init: function (widget, bindings, options) {
        //call the base constructor
        kendo.data.Binder.fn.init.call(this, widget.element[0], bindings, options);

        this.widget = widget;
    },
    refresh: function () {
        var value = this.bindings.mask.get();

        this.widget.setOptions({ mask: value });
    }
});