/**
 * Created by Levana.Xue on 8/11/2015.
 */
Ext.define('SenchaTouchDemo.view.Main',{
    extend: 'Ext.tab.Panel',
    id:'main',
    xtype: 'main',
    requires: [
        'SenchaTouchDemo.view.market.Trade',
        'SenchaTouchDemo.view.role.Account',
        'SenchaTouchDemo.view.role.OrderBook'
    ],
    config: {
        title:'Order',
        tabBarPosition: 'bottom',
        tabBar:{
            width:'100%',
            cls:'tabBarStyle'
        },
        fullscreen: true,
        layout:{
            type: 'card',
            animation: {
                type: 'slide',
                direction: 'left'
            }
        },
        listeners:{
        },
        items: [
            {
                title: 'Order',
                iconCls: 'compose',
                layout: 'fit',
                items:{
                    xtype: 'marketTrade'
                }
            },
            {
                title: 'OrderBook',
                iconCls: 'bookmarks',
                layout: 'fit',
                scrollable: {
                    indicators: false //隐藏滚动条
                },
                items:{
                    xtype:'orderBook',
                    /*cls:'FullscreenStyle',*/
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
                title:'Account',
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