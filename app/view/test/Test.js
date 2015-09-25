/**
 * Created by Levana.Xue on 9/25/2015.
 */
Ext.define('SenchaTouchDemo.view.test.Test',{
    extend: 'Ext.Container',
    xtype:'test',
    requires:[

    ],
    config:{
        fullscreen: true,
        items:[
            {
                xtype:'container',
                docked:'left',
                width:'80%',
                style: 'background-color: white',
                items:[

                ]
            },

            {
                xtype:'container',
                width:'800px',
                items:{
                    xtype:'container',
                    layout: 'vbox',
                    width:'100%',
                    height:'100%',
                    items: [
                        {
                            html: 'Awesome banner',
                            style: 'background-color: #759E60;',
                            flex: 1
                        },
                        {
                            html: 'Some wonderful information',
                            style: 'background-color: #5E99CC;',
                            flex: 2
                        }
                    ]
                }
            }
        ]
    }
});