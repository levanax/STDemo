/**
 * Created by Levana.Xue on 8/12/2015.
 */
Ext.define('SenchaTouchDemo.model.role.Userdata', {
    extend: 'Ext.data.Model',
    requires: ['Ext.data.JsonP'],
    config: {
        fileds: [
            'UserId',
            'UserLoginStatus',
            'UseTradPasswd',
            'NewUserLogin'
        ],
        proxy: {
            type: 'localstorage',
            id: 'user-session-data'
        }
    }
});