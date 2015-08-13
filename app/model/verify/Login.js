/**
 * Created by Levana.Xue on 8/10/2015.
 */

Ext.define('SenchaTouchDemo.model.verify.Login', {
    extend:'Ext.data.Model',
    config:{
        fields:[
            'name',
            {name:'password',type:'int'}
        ],
        validations: [
            {type: 'presence',  field: 'name',message:'用户名不能为空'},
            {type: 'exclusion', field: 'name', list: ['Admin', 'Operator']},
            {type: 'format',    field: 'password', matcher: /\d+/,message:'password invalid .'}
        ]
    }
});