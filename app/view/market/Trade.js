/**
 * Created by Levana.Xue on 8/13/2015.
 */
Ext.define('SenchaTouchDemo.view.market.Trade',{
    extend:'Ext.tab.Panel',
    xtype:'marketTrade',
    requires:[
        'SenchaTouchDemo.view.market.Tradebuy',
        'SenchaTouchDemo.view.market.Tradesell'
    ],
    config:{
        tabBar:{
            width:'100%',
            height:36,
            cls:'topTabBar-trade'
        },

        items: [
            {
                title: 'Buy',
                xtype:'marketTradebuy'
            },
            {
                title: 'Sell',
                xtype:'marketTradesell'
            }
        ]
    }
});