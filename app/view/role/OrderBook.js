/**
 * Created by Levana.Xue on 8/13/2015.
 */
Ext.define('SenchaTouchDemo.view.role.OrderBook', {
    extend: "Ext.DataView",
    xtype: 'orderBook',
    requires: [
        'SenchaTouchDemo.store.OrderBook'
    ],
    config: {
        title: '列表',
        disableSelection: true,
        scrollable: {
            disabled: true
        },
        baseCls:'tableStyle-div',
        itemTpl: '<div>{code}</div><div>{market}</div><div>{ref}</div>',
        store: Ext.create('SenchaTouchDemo.store.OrderBook')
    }
});