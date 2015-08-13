Ext.define('SenchaTouchDemo.view.Setting', {
    extend: 'Ext.navigation.View',
    id:'setting',
    xtype: 'setting',

    requires: [
    ],

    config: {
        items: {
            xtype: 'home'
        }
    }
});
/*
*xtype : 该js define 标识类型
* requires :需要加载的组件
* config - items - xtype = xtype
 */
