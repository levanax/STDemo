/**
 * Created by Levana.Xue on 8/19/2015.
 */
Ext.define('SenchaTouchDemo.model.role.Account', {
    extend: 'Ext.data.Model',
    requires:[
    ],
    config: {
        fields: [
            {name:'AccNum',type:'string'},
            {name:'CucyCode',type:'string'},
            {name:'AccStatus',type:'string'},
            {name:'exhibit',type:'string',convert:function(v,record){
                var accnum = record.get('AccNum');
                var typeChar = accnum.substring(9, 10);
                if (typeChar == "1" || typeChar == "8") {
                    accType = "CASH";
                } else {
                    accType = "MARGIN";
                }
                var result = accnum + ' '+accType+' ' + record.get('CucyCode')
                return result;
            }}
        ]
    }
});
/*
 因为 fields 写错 fileds ，耗了1天
 */