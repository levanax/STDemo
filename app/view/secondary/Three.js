/**
 * Created by Levana.Xue on 8/13/2015.
 */
Ext.define('SenchaTouchDemo.view.secondary.Three',{
    extend:"Ext.Container",
    id:'three',
    xtype:'three',
    requires:[
        'Ext.form.FieldSet'
    ],
    config:{
        disableSelection: true,
            title:'Three',
            items: [{
                xtype: 'textfield',
                text: 'Setting'
            }]
    }
});