Ext.define('SenchaTouchDemo.profile.Base', {
    extend: 'Ext.app.Profile',

    launch: function() {
        app.init();
        if (Ext.os.is.Android) { //maybe target more specific android versions.
            Ext.Viewport.on('painted', function() {
                Ext.Viewport.setHeight(window.innerHeight);
            });
        }
        //Initialize the main view
        var view = Ext.create('SenchaTouchDemo.view.test.Test');
        Ext.Viewport.add(view);
        // this.redirectTo('test');
    }
});