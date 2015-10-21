Ext.define('SenchaTouchDemo.ux.override.TabMenuButton', {
    override: 'Ext.ux.TabMenuButton',
    config:{
    },
    onMenuButtonTap:function(button) {
        Ext.Viewport.hideMenu(this.getMenuSide());
    }
})