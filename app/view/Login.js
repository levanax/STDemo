/**
 * Created by Levana.Xue on 8/7/2015.
 */
Ext.define('SenchaTouchDemo.view.Login', {
    extend: 'Ext.form.Panel',
    id: 'login',
    xtype: 'login',

    requires: [
        'Ext.form.FieldSet',
        'Ext.field.Text',
        'Ext.field.Password',
        'SenchaTouchDemo.controller.Login',
        'SenchaTouchDemo.plugin.SamplePlugin'
    ],

    config: {
        disableSelection: true,
        items: [{
            docked: 'top',
            xtype: 'titlebar',
            title: i18n.t('INDEX_TITLE')
        }, {
            height: 30
        }, {
            xtype: 'fieldset',
            items: [{
                xtype: 'textfield',
                name: 'name',
                autoComplete: false,
                placeHolder: 'Enter your username',
                plugins: [{
                    type: 'sampleplugin',
                    lableImg:'resources/images/account.png',
                    pluginId: 'sampleplugin'
                }]
            }, {
                xtype: 'passwordfield',
                autoComplete: false,
                name: 'password',
                maxLength: 16,
                placeHolder: 'Enter your password'
            }]
        }, {
            items: {
                xtype: 'button',
                centered: true,
                ui: 'action',
                action: 'login',
                text: app.t("LOGIN.LOGIN_BTN"),
                itemId: 'loginBtn',
                width: '95%',
                handler: function () {
                    // use the push() method to push another view. It works much like
                    // add() or setActiveItem(). it accepts a view instance, or you can give it
                    // a view config.
                    //console.log('in handler .......');
                }
            }
        }/*,
            {
                xtype: 'multistatebutton',
                width: 100,
                height: 50,
                text: 'Buy now',
                afterText: 'Install',
                handler: function () {
                    Ext.Msg.alert('Thank you');
                }
            }*/
        ]/*,
         listeners: [
         {
         delegate: '#loginBtn',// the itemId property
         event: 'tap',
         fn: 'doLogin'
         }
         ]*//*,
         control: {
         'button[itemId=loginBtn]': {
         tap: 'doLogin'
         }
         }*/

    }/*,
     doLogin:function(thisP,eP, eOptsP){
     console.log('in doLogin  ...');
     console.log(thisP.up('app-login').getValues());
     }*/
});
/*
 *requires : 该 define 需要用到的组件
 *
 */