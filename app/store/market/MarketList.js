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
    storeId: 'marketList',
    autoLoad: false,
    requires: [
        'SenchaTouchDemo.model.market.Market'
    ],
    model: 'SenchaTouchDemo.model.market.Market',
    proxy: {
        type: 'ajax',
        url: setting.serverUrl + 'system/orderMarkets',
        actionMethods: {
            create  : 'POST',
            read    : 'POST',
            update  : 'POST',
            destroy : 'POST'
        },
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        useDefaultXhrHeader: false,
        withCredentials: true,
        reader: {
            type: 'appReaderMarket'
        }
    },
    listeners: {
    }
});