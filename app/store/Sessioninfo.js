/**
 * Created by Levana.Xue on 8/21/2015.
 */
Ext.define('SenchaTouchDemo.store.Sessioninfo',{
    extend:'Ext.data.Store',
    storeId:'sessioninfo',
    requires:[
        'SenchaTouchDemo.model.Sessioninfo'
    ],
    model:'SenchaTouchDemo.model.Sessioninfo',
    proxy:{
        type:'memory',
        reader:{
            type:'json'
        }
    }
});
console.log('in here session info store l................')