/**
 * Created by Levana.Xue on 8/11/2015.
 */
Ext.define('SenchaTouchDemo.view.Main',{
    extend: 'Ext.tab.Panel',
    id:'main',
    xtype: 'main',
    requires: [
        'SenchaTouchDemo.view.market.Trade'
    ],
    config: {
        title:'Order',
        tabBarPosition: 'bottom',
        fullscreen: true,
        layout:'card',
        listeners:{
        },
        items: [
            {
                title: 'Order',
                iconCls: 'compose',
                scrollable: false,
                items:{
                    xtype: 'marketTrade',
                    height:700
                }
            },
            {
                title: 'OrderBook',
                iconCls: 'bookmarks',
                scrollable: true,
                items:{
                    xtype:'orderBook',
                    height:700
                }
            },
            {
                title: 'Market',
                iconCls: 'info',

                styleHtmlContent: true,
                scrollable: true,

                html: [
                    "this is market panel. "
                ].join("")
            },
            {
                title: 'Account',
                iconCls: 'user',
                scrollable: true,

                items: [{
                        xtype:'roleAccount',
                        height:500
                    }
                ]
            }
        ]
    }
});