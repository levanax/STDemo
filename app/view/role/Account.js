/**
 * Created by Levana.Xue on 8/12/2015.
 */
Ext.define('SenchaTouchDemo.view.role.Account',{
    extend:"Ext.Container",
    id:'roleAccount',
    xtype:'roleAccount',
    requires:[

    ],
    config:{
        title: 'My Account',
        disableSelection: true,
            items:[
                {
                    xtype:'fieldset',
                    title:'theme',
                    items:[
                        {
                            xtype: 'radiofield',
                            name : 'color',
                            value: 'red',
                            label: 'Red',
                            checked: true
                        },
                        {
                            xtype: 'radiofield',
                            name : 'color',
                            value: 'green',
                            label: 'Green'
                        },
                        {
                            xtype: 'radiofield',
                            name : 'color',
                            value: 'blue',
                            label: 'Blue'
                        }
                    ]
                },
                {
                    title: 'My Account',
                    xtype: 'button',
                    text: 'logout',
                    height:20,
                    handler: function() {
                        // use the push() method to push another view. It works much like
                        // add() or setActiveItem(). it accepts a view instance, or you can give it
                        // a view config.

                        var roleAccountView = Ext.getCmp('viewer');
                        roleAccountView.push(Ext.create('SenchaTouchDemo.view.secondary.Second'));
                    }
                }
            ]
    }
});