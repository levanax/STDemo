/**
 * Created by Levana.Xue on 8/7/2015.
 */
Ext.define('SenchaTouchDemo.controller.Login', {
    extend: 'Ext.app.Controller',
    requires: [
        'SenchaTouchDemo.model.verify.Login',
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
            loginButton: 'button[itemId=loginBtn]'
        }
    },
    doLogin: function (thisP, eP, eOptsP,thisR) {
        //表单验证
        var params = thisP.up('login').getValues();
        var model = Ext.create('SenchaTouchDemo.model.verify.Login', params);
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
                        util.Msg.alert(data.UserLoginResponse.User.SysMsg);
                    }else{
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
            var errorChar = errors.all[0]._message;
            util.Msg.alert(errorChar);
        }
    }
});

//