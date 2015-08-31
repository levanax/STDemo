/**
 * Created by Levana.Xue on 8/19/2015.
 */
Ext.define('AppReaderMarket', {
    extend: 'Ext.data.reader.Json',
    alias: 'reader.appReaderMarket',
    getResponseData: function (response) {
        var data = this.callParent([response]);
        var result = [];
        for(var i= 0;i<data.length ;i++){
            result.push({
                market:data[i]
            });
        }
        return result;
    }
});

Ext.define('SenchaTouchDemo.store.market.MarketList', {
    extend: 'Ext.data.Store',
    requires: [
        'SenchaTouchDemo.model.market.Market'
    ],
    config:{
        storeId: 'marketList',
        autoLoad: false,
        model: 'SenchaTouchDemo.model.market.Market',
        proxy: {
            type: 'ajax',
            url: setting.serverUrl + 'system/orderMarkets',
            reader: {
                type: 'appReaderMarket'
            }
        },
        listeners: {
        }
    }
});