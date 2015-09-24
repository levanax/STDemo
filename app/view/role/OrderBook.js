/**
 * Created by Levana.Xue on 9/24/2015.
 */
Ext.define('SenchaTouchDemo.view.role.OrderBook', {
    extend: "Ext.Container",
    id:'orderBook',
    xtype: 'orderBook',
    requires: [
        'SenchaTouchDemo.view.role.OrderBookList'
    ],
    config: {
        layout:{
            type: 'fit'
        },
        items:[
            {
                xtype:'orderBookList'
            }
        ]

    }
});