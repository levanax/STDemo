/**
 * Created by Levana.Xue on 9/25/2015.
 */
Ext.define('Ext.ux.side.Panel',{
    extend:'Ext.Container',
    xtype:'sidepanel',
    alternateClassName:'Ext.SidePanel',
    requires:[
        'Ext.ux.side.Bar'
    ],
    config:{
        /**
         *menus:{
         *
         * }
         */
        menusBar:null,
        menusBarLayout:{
            position:'left',
            direction:'left'
        }
    },
    constructor: function(config) {
        this.initConfig(config);
        this.callParent([config]);
    },
    init: function (cmp) {

    },
    destroy:function(){

    },
    applyMenusBar:function(config){

    }
});