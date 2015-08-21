/**
 * Created by Levana.Xue on 8/7/2015.
 */
Ext.define('SenchaTouchDemo.view.Login', {
    extend: 'Ext.form.Panel',
    id:'login',
    xtype: 'login',

    requires: [
        'Ext.form.FieldSet',
        'Ext.field.Text',
        'Ext.field.Password',
        'SenchaTouchDemo.controller.Login'
    ],

    config: {
        title:'Test security',
        disableSelection: true,
        items: [{
                docked: 'top',
                xtype: 'titlebar',
                title: 'Test security'
        }, {
            height:30
        }, {
            xtype: 'fieldset',
            items: [{
                xtype: 'textfield',
                name: 'name',
                autoComplete: false,
                label: 'User Name',
                placeHolder: 'Enter your username',
                value: 'mftst01'
            }, {
                xtype: 'passwordfield',
                autoComplete: false,
                name: 'password',
                label: 'Password',
                value: '123456789',
                maxLength: 16,
                placeHolder: 'Enter your password'
            }]
        }, {
            items: {
                xtype: 'button',
                centered: true,
                ui: 'action',
                action:'login',
                text: 'Login',
                itemId: 'loginBtn',
                width: '60%',
                handler: function() {
                    // use the push() method to push another view. It works much like
                    // add() or setActiveItem(). it accepts a view instance, or you can give it
                    // a view config.
                    //console.log('in handler .......');
                }
            }
        }]/*,
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