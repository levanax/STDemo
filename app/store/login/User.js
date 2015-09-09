/**
 * Created by Levana.Xue on 9/9/2015.
 */
Ext.define('SenchaTouchDemo.store.login.User', {
    extend: 'Ext.data.Store',
    requires: [
        'SenchaTouchDemo.model.login.User'
    ],
    config:{
        model: 'SenchaTouchDemo.model.login.User',
        storeId:'loginUser'
    }
});