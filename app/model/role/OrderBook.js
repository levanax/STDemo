/**
 * Created by Levana.Xue on 8/14/2015.
 */
//custom type
Ext.apply(Ext.data.Types,{
    MARKET:{
        convert: function(v, data) {
            return new VELatLong(data.lat, data.long);
        },
        sortType: function(v) {
            return v.Latitude;  // When sorting, order by latitude
        },
        type: 'market'
    }
});

Ext.define('SenchaTouchDemo.model.role.OrderBook',{
    extend:'Ext.data.Model',
    config:{
        fields:[
            'OrdID',
            {name:'SecurityMktCode',mapping:'Security.MktCode',type:'string'},
            {name:'SecuritySctyID',mapping:'Security.SctyID',type:'int'},
            'GrpOrdID',
            {name:'OrdSide',type:'string',convert:function(val){
                if(val =="B"){
                    return "買入";
                }else{
                    return "沽出";
                }
            }},
            'OrdType',
            'OrdQty',
            'InitQty',
            'Price',
            'AvgPx',
            'TimeInForce',
            'InvestorCode',
            'OrdStatus',
            'CumQty',
            'SrcChnl',
            'LastExecTime',
            'PrdLnCode',
            'OrderNum',
            'LinkOrderNum'
        ]
    }
});