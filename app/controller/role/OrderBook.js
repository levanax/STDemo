/**
 * Created by Levana.Xue on 8/18/2015.
 */
Ext.define('SenchaTouchDemo.controller.role.OrderBook',{
    extend:'Ext.app.Controller',
    requires:[
        'SenchaTouchDemo.model.role.Userdata',
        'SenchaTouchDemo.store.role.OrderBook'
    ],
    config:{
        refs:{
            orderBookView:'orderBook',
            accountCom:'selectfield[itemId=accountOB]'
        },
        comAccountSel:null,
        control:{
            orderBookView:{
                initialize:'initializer'
            },
            accountCom:{
                change:function( thisP, newValue, oldValue,eOpts){

                }
            }
        }
    },
    initializer:function(){
        var accountsStore = Ext.data.StoreManager.lookup('account');
        this.getAccountCom().setStore(accountsStore);
        GobleAccountCom = this.getAccountCom()
        var accNum = this.getAccountCom().getValue();
        var cucyCode = app.Account.getSelAccountData(accNum).get('CucyCode');

        var sessioninfoStore = Ext.data.StoreManager.lookup('sessioninfo');
        var sessId = sessioninfoStore.getAt(0).get('SessId');
        var params = {
            sessId: sessId,
            accNum: accNum,
            cucyCode: cucyCode
        };
        Ext.Ajax.request({
            url:setting.serverUrl +'stock/accountOrderHistory',
            method: 'POST',
            params: params,
            withCredentials: true,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            useDefaultXhrHeader: false,
            success: function (response) {
                var data = Ext.decode(response.responseText);
                var obStore = Ext.create('SenchaTouchDemo.store.role.OrderBook')
                obStore.add(data.Account.OrdHist.Order)
                obStore.sync();
                Ext.getCmp('orderBook').setStore(obStore);
            }
        });
    }
});