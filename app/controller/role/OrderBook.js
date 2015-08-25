/**
 * Created by Levana.Xue on 8/18/2015.
 */
Ext.define('SenchaTouchDemo.controller.role.OrderBook',{
    extend:'Ext.app.Controller',
    requires:[
        'SenchaTouchDemo.model.role.Userdata'
    ],
    config:{
        refs:{
            orderBookView:'orderBook'
        },
        control:{
            orderBookView:{
                initialize:'initializer'
            }
        }
    },
    initializer:function(){
        var userData = Ext.ModelManager.getModel('SenchaTouchDemo.model.role.Userdata');
        userData.load(constant.userDataId,{
            scope:this,
            success:function(cached){
                //console.log(cached.data)
            }
        });

        var tempdata = Ext.data.StoreManager.lookup('orderBook');
    }
});