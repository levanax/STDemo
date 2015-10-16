/**
 * Created by Levana.Xue on 9/25/2015.
 */
Ext.define('SenchaTouchDemo.view.test.Test',{
    extend: 'Ext.DataView',
    xtype:'test',
    requires:[

    ],
    config:{
        itemTpl: new Ext.XTemplate(
                '<tpl for=".">',
                '<tpl if="this.isShow(price)">',
                '<div class="customTr">',
                '<div><ul>{market}{stockId}</ul><ul>{name}</ul></div>',
                '<div>{price}</div>',
                '<div><ul>{change}</ul><ul>{changeRate}</ul></div>',
                '</tpl>',
                '</tpl>',
                {
                    compiled:true,
                    isShow:function(args){
                        return args >=60;
                    }
                }
            ),
        store: Ext.create('SenchaTouchDemo.store.test.Stock'),
        listeners:{
            initialize:'init'
        }
    },
    init:function(){
        "use strict";

    }
});