/**
 * Created by Levana.Xue on 8/18/2015.
 */
Ext.define('SenchaTouchDemo.store.market.OrderTypeBuy',{
    extend:'Ext.data.Store',
    requires:[
        'Ext.data.proxy.Sql',
        "SenchaTouchDemo.model.OrderType"
    ],
    config:{
        storeId:'orderTypeBuy',
        model:"SenchaTouchDemo.model.OrderType",
        proxy:{
            type:'sql',
            database:'STDemo',
            table:'ORDER_TYPE_BUY',
            reader: {
                type: 'json'
            }
        }
    }
});