/**
 * Created by Levana.Xue on 8/18/2015.
 */
Ext.define('SenchaTouchDemo.store.OrderType',{
    extend:'Ext.data.Store',
    requires:[],
    config:{
        storeId:'orderTypeStroe',
        model:"SenchaTouchDemo.model.OrderType",
        proxy:{
        }
    }
});