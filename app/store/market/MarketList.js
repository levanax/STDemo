/**
 * Created by Levana.Xue on 8/19/2015.
 */
Ext.define('AppReaderMarket',{
    extend:'Ext.data.reader.Json',
    alias:'reader.appReaderMarket',
    getResponseData:function(response){
        var data = this.callParent([response]);
        return data;
    }
});

Ext.define('SenchaTouchDemo.store.market.MarketList',{
    extend:'Ext.data.store',
    storeId:'marketList',
    autoLoad:false,
    requires:[

    ],
    model:'SenchaTouchDemo.model.market.marketList',
    proxy:{
        type:'ajax',
        url:'stock/availableOrderType',
        reader:{
            type:'appReaderMarket'
        }
    }
});