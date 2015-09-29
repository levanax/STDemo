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
        sideBar:{
            items:{
                html: 'this is menus Bar ',
                style: 'background-color: #759E60;'
            }
        },
        sideBarLayout:{
            position:'left',
            direction:'left'
        },
        items:[
            {
                html: 'Awesome banner',
                style: 'background-color: #759E60;'
            }
        ]
    },
    constructor: function() {
        this.callParent();

    },
    initialize: function (cmp) {

    },
    destroy:function(){

    },
    applySideBar:function(config){

    },
    updateSideBarPosition:function(position){
        var sideBar = this.getSideBar();
        if (sideBar) {
            sideBar.setDocked(position);
        }
    }
});