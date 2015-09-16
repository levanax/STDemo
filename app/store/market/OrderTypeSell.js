/**
 * Created by Levana.Xue on 8/18/2015.
 */
Ext.define('SenchaTouchDemo.store.market.OrderTypeSell',{
    extend:'Ext.data.Store',
    requires:[
        'Ext.data.proxy.Sql',
        "SenchaTouchDemo.model.OrderType"
    ],
    config:{
        storeId:'orderTypeSell',
        model:"SenchaTouchDemo.model.OrderType",
        proxy:{
            type:'sql',
            database:'STDemo',
            table:'ORDER_TYPE_SELL',
            reader: {
                type: 'json'
            }
        }
    }
});