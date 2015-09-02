/**
 * Created by Levana.Xue on 8/31/2015.
 */
Ext.define('SenchaTouchDemo.commons.Db',{
    alternateClassName:['Db'],
    requires:['Ext.device.SQLite'],
    statics:{
        db:undefined,
        init:function(){
            if(Ext.feature.has.SqlDatabase){
                this.db = Ext.device.SQLite.openDatabase({
                    name: '2goTrade.database',
                    version: '1.0', // is ignored if `creationCallback` is provided
                    displayName: '2go trade',
                    estimatedSize: 2 * 1024 * 1024,
                    creationCallback: function (db) { // optional
                        // you can set database version here by calling `db.changeVersion(...)` method (see below)
                        app.Msg.alert('db create complete...');
                    }
                });
            }
        }
    }
});