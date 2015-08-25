/**
 * Created by Levana.Xue on 8/20/2015.
 */
Ext.define('SenchaTouchDemo.controller.market.Trade',{
    extend:"Ext.app.Controller",
    requires:[
        'SenchaTouchDemo.view.market.Trade',
        'SenchaTouchDemo.store.market.MarketList'
    ],
    config:{
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
        console.log('in here 0...');
        /*
        trade page data init ..
         */


    }
});
