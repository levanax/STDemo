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
    },
    initialize:function(){

    },
    doSetDocked:function(newDocked){
        console.log(' in doSetDocked ...')
        var layout = this.getLayout(),
            initialConfig = this.getInitialConfig(),
            pack;

        if(initialConfig.layout || !initialConfig.layout.pack){
            pack = (newDocked == 'bottom') ? 'center' : 'left';
            //layout isn't guaranteed to be instantiated so must test
            if (layout.isLayout) {
                layout.setPack(pack);
            } else {
                layout.pack = (layout && layout.pack) ? layout.pack : pack;
            }
        }
        this.callParent(arguments);
    }
});