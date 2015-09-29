/**
 * Created by Levana.Xue on 8/10/2015.
 */
Ext.define('SenchaTouchDemo.model.login.User', {
    extend:'Ext.data.Model',
    requires:[
        'Ext.data.proxy.SessionStorage',
        'Ext.data.identifier.Uuid'
    ],
    config:{
        identifier:{
            type:'uuid',//must ref
            version:'4'
        },
        fields:[
            'name',
            {name:'password',type:'string'}
            // ****type check
        ],
        validations: [
            {type: 'presence',  field: 'name',message:app.t('USER_NAME_EMPTY')},
            {type: 'exclusion', field: 'name', list: ['Admin', 'Operator'],message:'not is \'Admin\''},
            {type: 'presence',  field: 'password',message:app.t('PASSWORD_EMPTY')}
           /* {type: 'format',    field: 'password', matcher: /\d+/,message:'password invalid .'}*/
        ],
        proxy: {
            type: 'sessionstorage',
            id  : 'login-user'
        }
    }
});