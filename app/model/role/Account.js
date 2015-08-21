/**
 * Created by Levana.Xue on 8/19/2015.
 */
Ext.define('SenchaTouchDemo.model.role.Account', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            {name:'AccNum',type:'int'},
            {name:'CucyCode',type:'string'},
            {name:'AccStatus',type:'string'},
            {name:'exhibit',type:'string',convert:function(v,record){
                var result = record.get('AccNum') + ' ' + record.get('CucyCode')
                return result;
            }}
        ]
    }
});
console.log('in here acc info model l................')
/*
 因为 fields 写错 fileds ，耗了1天
 */