/**
 * Created by Levana.Xue on 8/12/2015.
 */
Ext.define('SenchaTouchDemo.controller.market.Tradebuy', {
    extend: 'Ext.app.Controller',
    requires: [
        'SenchaTouchDemo.store.market.MarketList'
    ],
    init: function () {
        //app 初始化时 执行一次
        //console.log('in init()...');
    },
    config: {
        refs: {
            marketTradebuyView:'marketTradebuy',
            accountSel:'selectfield[itemId=account]',
            marketSel:'selectfield[itemId=market]'
        },
        control: {
            marketTradebuyView:{
                initialize:'initializer'
            }
        }
    },
    launch: function () {
        //console.log('in launch...')
    },
    initializer: function ( thisP, eOpts ) {
        console.log('in here 1...');
        //init account select
        var accountsStore = Ext.data.StoreManager.lookup('account');
        this.getAccountSel().setStore(accountsStore);

        var sessioninfoStore = Ext.data.StoreManager.lookup('sessioninfo');
        var sessId = sessioninfoStore.getAt(0).get('SessId')

        var marketlist = Ext.create('SenchaTouchDemo.store.market.MarketList',{
            params:{
                sessId:sessId
            }
        });
        marketlist.load();
        this.getMarketSel().setStore(marketlist);

    }
});