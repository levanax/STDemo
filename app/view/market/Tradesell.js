/**
 * Created by Levana.Xue on 8/17/2015.
 */
Ext.define('SenchaTouchDemo.view.market.Tradesell',{
    extend:'Ext.form.Panel',
    xtype:'marketTradesell',
    requires:[
        'Ext.form.FieldSet',
        'Ext.field.Select',
        'Ext.field.DatePicker',
        'Ext.field.Text'
    ],
    config:{
        disableSelection: true,
        items:[
            {
                xtype: 'fieldset',
                items: [{
                    xtype: 'selectfield',
                    name:'account',
                    label: 'Account',
                    options: [
                        {text: 'First Option',  value: 'first'},
                        {text: 'Second Option', value: 'second'},
                        {text: 'Third Option',  value: 'third'}
                    ]
                },{
                    xtype: 'selectfield',
                    name:'market',
                    label: 'Market',
                    options: [
                        {text: 'First Option',  value: 'first'},
                        {text: 'Second Option', value: 'second'},
                        {text: 'Third Option',  value: 'third'}
                    ]
                }, {
                    xtype: 'textfield',
                    name: 'buyPower',
                    autoComplete: false,
                    label: 'BuyPower',
                    placeHolder: '',
                    value: '1000,00',
                    readOnly:true
                }, {
                    xtype: 'textfield',
                    name: 'code',
                    autoComplete: false,
                    label: 'Code',
                    placeHolder: '',
                    value: ''
                },{
                    xtype: 'selectfield',
                    name:'type',
                    label: 'Type',
                    options: [
                    ]
                }, {
                    xtype: 'spinnerfield',
                    name: 'price',
                    minValue:0,
                    stepValue : 0.5,
                    autoComplete: false,
                    label: 'Price',
                    placeHolder: '',
                    value: ''
                }, {
                    xtype: 'spinnerfield',
                    name: 'quantity',
                    minValue:0,
                    stepValue : 1000,
                    autoComplete: false,
                    label: 'Quantity',
                    placeHolder: '',
                    value: ''
                }, {
                    xtype: 'datepickerfield',
                    name: 'date',
                    autoComplete: false,
                    label: 'Date',
                    placeHolder: '',
                    value: new Date()
                },{
                    xtype: 'fieldset',
                    border:0,
                    baseCls:'orderBtnArea',
                    items:[
                        {
                            xtype: 'button',
                            ui: 'normal',
                            action:'submit',
                            text: 'reset',
                            itemId: 'reset',
                            width: '40%'
                        },
                        {
                            xtype: 'button',
                            ui: 'normal',
                            action:'submit',
                            text: 'Submit',
                            itemId: 'submit',
                            width: '40%'
                        }
                    ]
                }]
            }
        ]
    },
    initialize:function(){
        //console.log('initialize trade ...')

    }
});