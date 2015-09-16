This folder contains the stores


//多级排序
sorters:[
        {
            property:'LastExecTime',
            direction:'desc'
        },
        {
            property:'OrdID',
            direction:'asc'
        }
    ]

    //自定义 reader
    Ext.define('AppReader',{
        extend:'Ext.data.reader.Json',
        alias:'reader.appReader',
        getResponseData:function(response){
            var data = this.callParent([response]);
            console.log(data)
            return data;
        }
    });

    //store
    Ext.define('genre', {
                extend: 'Ext.data.Model',
                config: {
                    fields:[
                        {name:'id',type:'int'},
                        {name:'genre',type:'string'}
                    ]
                }
            });
            var genreStore=Ext.create('Ext.data.Store', {
                model: 'genre',
                data : [
                    {id:1,genre:'喜剧'},
                    {id:2,genre:'文艺'},
                    {id:3,genre:'动作'}
                ]
            });
            console.log(genreStore)

            //save data
            var accounts = Ext.create('SenchaTouchDemo.store.role.Account',{
                                        autoLoad:true,
                                        data:data.UserLoginResponse.User.AccProfile
                                    });

            //read data
            var accountsStore = Ext.data.StoreManager.lookup('account');
            this.getAccountSel().setStore(accountsStore);


/*Ext.require(["Ext.data.proxy.SQL"]);

Ext.define("User", {
    extend: "Ext.data.Model",
    config: {
        fields: [ "firstName", "lastName" ]
    }
});

Ext.create("Ext.data.Store", {
    model: "User",
    storeId: "Users",
    proxy: {
        type: "sql"
    }
});

Ext.getStore("Users").add({
    firstName: "Polly",
    lastName: "Hedra"
});

Ext.getStore("Users").sync();*/






---------------------------------------------
Ext.define('Product', {
                extend: 'Ext.data.Model',
                config: {
                    fields: [
                        {name: 'name',    type: 'string'}
                    ],
                    proxy: {
                        type: "sql"
                    }
                }
            });
            Ext.define("User", {
                extend: "Ext.data.Model",
                config: {
                    fields: [ "firstName", "lastName" ],
                    hasMany: {model: 'Product', name: 'products'}
                },
                proxy: {
                    type: "sql"
                }
            });

            Ext.create("Ext.data.Store", {
                model: "User",
                storeId: "Users"
            });
            var user = Ext.getStore("Users");
            user.add({
                firstName: "Polly",
                lastName: "Hedra"
            });
            var products = user.getAt(0).products();
            products.add({
                name:'TEST0000000'
            })
            products.sync();
            user.sync();
            console.log(user)
----------------------------------------------
