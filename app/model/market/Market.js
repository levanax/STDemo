/**
 * Created by Levana.Xue on 8/20/2015.
 */
Ext.define('SenchaTouchDemo.model.market.Market',{
    extend:'Ext.data.Model',
    requires:[
        'Ext.data.proxy.LocalStorage'
    ],
    config:{
        fields:[
            {name:'market',type:'string'}
        ],
        proxy: {
            type: 'localstorage',
            id  : 'market-name'
        }
    }
});