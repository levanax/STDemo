/**
 * Created by Levana.Xue on 8/19/2015.
 */
Ext.define('AppReader',{
    extend:'Ext.data.reader.Json',
    alias:'reader.appReader',
    getResponseData:function(response){
        var data = this.callParent([response]);
        return data;
    }
});
Ext.define('SenchaTouchDemo.store.role.Account',{
    extend:'Ext.data.Store',
    requires:[
        'SenchaTouchDemo.model.role.Account'
    ],
    config:{
        model:'SenchaTouchDemo.model.role.Account',
        storeId:'account',
        proxy:{
            type: 'memory',
            reader:{
                type:'appReader',
                rootProperty:'Account'
            }
        }
    }
});