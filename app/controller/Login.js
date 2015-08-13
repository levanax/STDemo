/**
 * Created by Levana.Xue on 8/7/2015.
 */
Ext.define('SenchaTouchDemo.controller.Login', {
    extend: 'Ext.app.Controller',
    requires: [
        'SenchaTouchDemo.model.verify.Login'
    ],

    config: {
        views: [
            'SenchaTouchDemo.view.Login'
        ],
        control: {
            loginButton: {
                tap: 'doLogin'
            }
        },
        refs: {
            loginButton: 'button[itemId=loginBtn]'
        },
        routes:{
            'toMainPanel':'toMain'
        }
    },
    doLogin: function (thisP, eP, eOptsP) {
        console.log('in doLogin  ...');
        //表单验证
        var params = thisP.up('login').getValues();
        var model = Ext.create('SenchaTouchDemo.model.verify.Login', params);
        var errors = model.validate();
        if (errors.isValid()) {
            Ext.Ajax.request({
                url: 'http://192.168.1.7:3030/login/submit',
                method: 'POST',
                params: params,
                withCredentials: true,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                useDefaultXhrHeader: false,
                success: function (response) {
                    console.log(response);
                    var text = response.responseText;
                    // process server response here

                    Ext.Viewport.setActiveItem(
                        'main', {
                            type: 'slide',
                            direction: 'right'
                        });
                }
            });
        } else {
            //console.log(errors.getByField('password'));
            var errorChar = errors.all[0]._message;
            Ext.Msg.alert(errorChar);
        }
    },
    toMain:function(){
        console.log('in to main ...')
        Ext.Viewport.setActiveItem(
            'main', {
                type: 'slide',
                direction: 'right'
            });
    }

});

//