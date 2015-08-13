/**
 * Created by Levana.Xue on 8/13/2015.
 */
Ext.define('SenchaTouchDemo.view.secondary.Second',{
    extend:"Ext.Container",
    id:'second',
    xtype:'second',
    requires:[

    ],
    config:{
        disableSelection: true,
            title:'Second',
            items: [{
                xtype: 'button',
                text: 'Three',
                handler: function() {
                    // use the push() method to push another view. It works much like
                    // add() or setActiveItem(). it accepts a view instance, or you can give it
                    // a view config.

                    var roleAccountView = Ext.getCmp('viewer');
                    roleAccountView.push(Ext.create('SenchaTouchDemo.view.secondary.Three'));
                }
            }]
    }
});