/**
 * Created by Levana.Xue on 8/13/2015.
 */
Ext.define('SenchaTouchDemo.store.OrderBook',{
    extend:'Ext.data.Store',
    requires:[
        'SenchaTouchDemo.model.OrderBook'
    ],
    model:'SenchaTouchDemo.model.OrderBook',
    sorters:'code',
    data: [{
        code: '1',
        market: 'HK',
        ref: '110000'
    },{
        code: '2',
        market: 'HK',
        ref: '110000'
    },{
        code: '3',
        market: 'SZ',
        ref: '110000'
    },{
        code: '5',
        market: 'HK',
        ref: '110000'
    },{
        code: '1',
        market: 'SZ',
        ref: '110000'
    }]
});