Ext.define('SenchaTouchDemo.profile.Phone', {
    extend: 'SenchaTouchDemo.profile.Base',

    config: {
    },

    isActive: function() {
        return Ext.os.is.Phone; // || Ext.os.is.Desktop;
    },

    launch: function() {

        this.callParent();
    }
});
