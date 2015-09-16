/**
 * Created by Levana.Xue on 8/18/2015.
 */
Ext.define('SenchaTouchDemo.model.OrderTypeName',{
    extend:'Ext.data.Model',
    requires:[
        'SenchaTouchDemo.model.OrderType'
    ],
    config:{
        fields:[
            {name:'LangCode',type:'string'},
            {name:'CntyCode',type:'string'},
            {name:'$t',type:'string'}
        ],
        belongsTo:['SenchaTouchDemo.model.OrderType']
    }
});