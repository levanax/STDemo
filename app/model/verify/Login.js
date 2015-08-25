/**
 * Created by Levana.Xue on 8/10/2015.
 */
console.log('in model ...')
Ext.define('SenchaTouchDemo.model.verify.Login', {
    extend:'Ext.data.Model',
    config:{
        fields:[
            'name',
            {name:'password',type:'int'}
        ],
        validations: [
            {type: 'presence',  field: 'name',message:i18n.t('USER_NAME_EMPTY')},
            {type: 'exclusion', field: 'name', list: ['Admin', 'Operator'],message:'not is \'Admin\''},
            {type: 'presence',  field: 'password',message:i18n.t('PASSWORD_EMPTY')}
            /*{type: 'format',    field: 'password', matcher: /\d+/,message:'password invalid .'}*/
        ]
    }
});