Ext.define('SenchaTouchDemo.profile.Tablet', {
    extend: 'SenchaTouchDemo.profile.Base',

    config: {
    },

    isActive: function() {
        return Ext.os.is.Tablet || Ext.os.is.Desktop;
    },

    launch: function() {
        this.callParent();
    }
});
