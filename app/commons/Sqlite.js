/**
 * Created by Levana.Xue on 8/31/2015.
 */
Ext.define('SenchaTouchDemo.commons.Sqlite', {
    alternateClassName: ['Db'],
    requires: ['Ext.device.SQLite'],
    statics: {
        db: undefined,
        init: function () {
            //Please wait for the "deviceready" event, as in the following example
            var db = window.sqlitePlugin.openDatabase({
                name: "my.db",
                location:1
            });

            db.transaction(function(tx) {
                tx.executeSql('DROP TABLE IF EXISTS test_table');
                tx.executeSql('CREATE TABLE IF NOT EXISTS test_table (id integer primary key, data text, data_num integer)');

                // demonstrate PRAGMA:
                db.executeSql("pragma table_info (test_table);", [], function(res) {
                    app.Msg.alert("PRAGMA res: " + JSON.stringify(res));
                });

                tx.executeSql("INSERT INTO test_table (data, data_num) VALUES (?,?)", ["test", 100], function(tx, res) {
                    app.Msg.alert("insertId: " + res.insertId + " -- probably 1");
                    app.Msg.alert("rowsAffected: " + res.rowsAffected + " -- should be 1");

                    db.transaction(function(tx) {
                        tx.executeSql("select count(id) as cnt from test_table;", [], function(tx, res) {
                            app.Msg.alert("res.rows.length: " + res.rows.length + " -- should be 1");
                            app.Msg.alert("res.rows.item(0).cnt: " + res.rows.item(0).cnt + " -- should be 1");
                        });
                    });

                }, function(e) {
                    app.Msg.alert("ERROR: " + e.message,false);
                });
            });

            /*if(Ext.feature.has.SqlDatabase){
             this.db = Ext.device.SQLite.openDatabase({
             name: '2goTradeDatabase',
             version: '1.0', // is ignored if `creationCallback` is provided
             displayName: '2go trade',
             estimatedSize: 2 * 1024 * 1024,
             creationCallback: function (db) { // optional
             // you can set database version here by calling `db.changeVersion(...)` method (see below)
             app.Msg.alert('in db ...');
             }
             });
             }*/
        }
    }
});

/**
 * souces code
 note:
 var browserEnv = Ext.browser.is;
 if(browserEnv.Sencha) { //?????
 return Ext.create('Ext.device.sqlite.Sencha');
 }
 */