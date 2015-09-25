/**
 * Created by Levana.Xue on 9/25/2015.
 */
Ext.define('Ext.ux.side.Bar',{
    extend:'Ext.Toolbar',
    alternateClassName:'Ext.SideBar',
    xtype:'sidebar',
    requires:[
        'Ext.ux.side.Side'
    ],
    cofig:{
        /**
         * @cfg baseCls
         * @inheritdoc
         */
        baseCls: Ext.baseCSSPrefix + 'tabbar',
        // @private
        defaultType: 'side',
        layout:{
            type:'vbox',
            align:'middle'
        },
        tpl:[

        ]
    }
});