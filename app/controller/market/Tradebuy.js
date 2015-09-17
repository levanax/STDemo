/**
 * Created by Levana.Xue on 8/12/2015.
 */
Ext.define('SenchaTouchDemo.controller.market.Tradebuy', {
    extend: 'Ext.app.Controller',
    requires: [
        'SenchaTouchDemo.store.market.MarketList',
        'SenchaTouchDemo.store.market.OrderTypeBuy',
        'SenchaTouchDemo.store.market.OrderTypeSell'
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
    },
    initializer: function ( thisP, eOpts ) {
        //init account select
        var accountsStore = Ext.data.StoreManager.lookup('account');
        this.getAccountSel().setStore(accountsStore);

        var sessioninfoStore = Ext.data.StoreManager.lookup('sessioninfo');
        var sessId = sessioninfoStore.getAt(0).get('SessId')

        var marketlist = Ext.create('SenchaTouchDemo.store.market.MarketList',{
            autoSync:true,
            params:{
                sessId:sessId
            }
        });

        marketlist.load(function(){
            var selectMarket = marketlist.getAt(0).get('market');
            var params = {
                'sessId': sessId,
                'market':selectMarket
            }
            Ext.Ajax.request({
                url: setting.serverUrl + 'stock/availableOrderType',
                method: 'POST',
                params: params,
                withCredentials: true,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                useDefaultXhrHeader: false,
                success: function (response) {
                    var data = JSON.parse(response.responseText);
                    var ordTypes = data.AvailableOrderType.OrderTicket;
                    for(var i=0;i<ordTypes.length;i++){
                        var ordType = ordTypes[i];
                        if(ordType.OrdSide === 'B'){
                            Ext.create("SenchaTouchDemo.store.market.OrderTypeBuy");
                            Ext.getStore("orderTypeBuy").add(ordType.OrderType);
                            Ext.getStore("orderTypeBuy").sync();
                        }else{
                            Ext.create("SenchaTouchDemo.store.market.OrderTypeSell");
                            Ext.getStore("orderTypeSell").add(ordType.OrderType);
                            Ext.getStore("orderTypeSell").sync();
                        }
                    }
                    //console.log(Ext.getStore("orderTypeBuy"))
                    //console.log(Ext.getStore("orderTypeBuy").getModel())
                }
            })
        },this);
        marketlist.sync();
        this.getMarketSel().setStore(marketlist);
    }
});