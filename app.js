/*
 This file is generated and updated by Sencha Cmd. You can edit this file as
 needed for your application, but these edits will have to be merged by
 Sencha Cmd when it performs code generation tasks such as generating new
 models, controllers or views and when running "sencha app upgrade".

 Ideally changes to this file would be limited and most work would be done
 in other places (such as Controllers). If Sencha Cmd cannot merge your
 changes and its generated code, it will produce a "merge conflict" that you
 will need to resolve manually.
 */
Ext.Loader.setPath({
    'ux':'app/ux'
})

Ext.application({
    name: 'SenchaTouchDemo',
    appFolder:'app',
    requires: [
        'Ext.MessageBox',
        'SenchaTouchDemo.config.CustomAjaxProxy',

        'SenchaTouchDemo.commons.Util',
        'SenchaTouchDemo.config.setting',
        'SenchaTouchDemo.config.memoryDataList'
    ],
    /*
     * 不建议在这初始化所有views
     */
    /*views: [
     'Viewer',
     'Main',
     'Login',
     'Setting',
     'market.Trade',
     'market.Tradebuy',
     'market.Tradesell',
     'role.Account',
     'role.OrderBook',
     'secondary.Second',
     'secondary.Three'
     ],*/

    /*
     * controllers
     */
    controllers: [
        'router.Routers',
        'Viewer',
        'Login',
        'market.Trade',
        'market.Tradebuy',
        'role.OrderBook'
    ],

    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },

    isIconPrecomposed: true,

    startupImage: {
        '320x460': 'resources/startup/320x460.jpg',
        '640x920': 'resources/startup/640x920.png',
        '768x1004': 'resources/startup/768x1004.png',
        '748x1024': 'resources/startup/748x1024.png',
        '1536x2008': 'resources/startup/1536x2008.png',
        '1496x2048': 'resources/startup/1496x2048.png'
    },
    routes: {
    },
    launch: function () {
        console.log('in launch...');
        app.init();
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();
        // Initialize the main view
        var view = Ext.create('SenchaTouchDemo.view.Login');
        Ext.Viewport.add(view);
    },

    onUpdated: function () {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function (buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    },
    listeners:{
        redirectTo:function(){
            console.log('in redire to ...')
        }
    }
});
