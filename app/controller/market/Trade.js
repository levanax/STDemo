/**
 * Created by Levana.Xue on 8/20/2015.
 */
Ext.define('SenchaTouchDemo.controller.market.Trade',{
    extend:"Ext.app.Controller",
    requires:[
        'SenchaTouchDemo.view.market.Trade'
    ],
    config:{
        views:[
            'SenchaTouchDemo.view.market.Trade'
        ],
        refs:{
            marketTradeView:'marketTrade'
        },
        control:{
            marketTradeView:{
                initialize:'initializer'
            }
        }
    },
    initializer: function ( thisP, eOpts ) {
        /*
        trade page data init ..
         */
       /* var marketlist = Ext.create('SenchaTouchDemo.store.market.MarketList');
        marketlist.load({

        })*/
    }
});
