/**
 * Created by Levana.Xue on 10/16/2015.
 */
Ext.define('SenchaTouchDemo.model.demo.Stock', {
    extend: 'Ext.data.Model',
    config: {
        fields:[
            "stockId",
            "name",
            "price",
            "market",
            "change",
            "changeRate"
        ]
    }
});