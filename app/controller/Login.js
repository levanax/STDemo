/**
 * Created by Levana.Xue on 8/7/2015.
 */
Ext.define('SenchaTouchDemo.controller.Login', {
    extend: 'Ext.app.Controller',
    requires: [
        'SenchaTouchDemo.store.login.User',
        'SenchaTouchDemo.model.role.Userdata',
        'SenchaTouchDemo.store.role.Account',
        'SenchaTouchDemo.store.Sessioninfo'
    ],
    config: {
        /*views: [
            'SenchaTouchDemo.view.Login' //在ctrl -> config 初始化view
        ],*/
        control: {
            loginButton: {
                tap: function(thisP,eP,eOptsP){
                    this.doLogin(thisP,eP,eOptsP,this);
                }
            }
        },
        refs: {
            loginButton: 'button[itemId=loginBtn]',
            loginform:'fieldset[itemId=loginform]'
        }
    },
    launch:function(){
        var loginUserStore = Ext.create('SenchaTouchDemo.store.login.User');
        loginUserStore.load();
        var logininfo = Ext.data.StoreManager.lookup('loginUser').getAt(0);
        if(Ext.isObject(logininfo)){
            Ext.getCmp('login').setRecord(logininfo);
        }
    },
    doLogin: function (thisP, eP, eOptsP,thisR) {
        //表单验证
        var params = thisP.up('login').getValues();
        var model = Ext.create('SenchaTouchDemo.model.login.User', params);
        var errors = model.validate();
        if (errors.isValid()) {
            Ext.Ajax.request({
                url: setting.serverUrl + 'login/submit',
                method: 'POST',
                params: params,
                withCredentials: true,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                useDefaultXhrHeader: false,
                success: function (response) {
                    var data = JSON.parse(response.responseText);
                    if(typeof data.UserLoginResponse.User.SysCode !== 'undefined'){
                        util.Msg.alert('username or password error ,'+data.UserLoginResponse.User.SysMsg);
                    }else{
                        //save login info
                        var loginUserStore = Ext.create('SenchaTouchDemo.store.login.User');
                        loginUserStore.load();
                        if(Ext.isObject(loginUserStore.getAt(0))){
                            loginUserStore.removeAt(0);
                            loginUserStore.sync();
                        }
                        loginUserStore.add(params);
                        loginUserStore.sync();

                        // process server response here
                            var userData = Ext.create('SenchaTouchDemo.model.role.Userdata',{
                                id:constant.userDataId
                            });
                        userData.set(data.UserLoginResponse.User);
                        userData.save();

                        Ext.create('SenchaTouchDemo.store.role.Account',{
                            autoLoad:true,
                            data:data.UserLoginResponse.User.AccProfile
                        });
                        Ext.create('SenchaTouchDemo.store.Sessioninfo',{
                            autoLoad:true,
                            data:data
                        })
                        app.user.setUsername(params.name);
                        thisR.redirectTo('viewer');
                    }
                }
            });
        } else {
            //console.log(errors.getByField('password'));
            var errorChar = '';
            Ext.each(errors.items,function(rec){
                errorChar += rec.getMessage()+'<br/>';
            });
            util.Msg.alert(errorChar);
        }
    }
});

//