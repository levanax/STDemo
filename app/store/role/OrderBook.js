/**
 * Created by Levana.Xue on 8/14/2015.
 */
Ext.define('SenchaTouchDemo.store.role.OrderBook',{
    extend:'Ext.data.Store',
    requires:[
        'SenchaTouchDemo.model.role.OrderBook'
    ],
    config:{
        storeId: 'orderBook',
        autoLoad: false,
        model:'SenchaTouchDemo.model.role.OrderBook',
        sorters:[
            {
                property:'LastExecTime',
                direction:'desc'
            },
            {
                property:'OrdID',
                direction:'asc'
            }
        ],
        proxy:{
            type:'sql',
            database:'STDemo',
            table:'ORDER_BOOKS',
            reader: {
                type: 'json'
            }
        }
    }
});