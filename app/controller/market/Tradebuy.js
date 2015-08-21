/**
 * Created by Levana.Xue on 8/12/2015.
 */
Ext.define('SenchaTouchDemo.controller.market.Tradebuy', {
    extend: 'Ext.app.Controller',
    requires: [],
    init: function () {
        //app 初始化时 执行一次
        //console.log('in init()...');
    },
    config: {
        views: [
            'SenchaTouchDemo.view.market.Tradebuy'
        ],
        refs: {
            marketTradebuyView:'marketTradebuy',
            accountSel:'selectfield[itemId=account]'
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
        //init account select
        var accountsStore = Ext.data.StoreManager.lookup('account');
        this.getAccountSel().setStore(accountsStore);


    }
});