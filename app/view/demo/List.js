/**
 * Created by Levana.Xue on 9/25/2015.
 */
Ext.define('SenchaTouchDemo.view.demo.List',{
    extend: 'Ext.DataView',
    xtype:'demoList',
    requires:[
        'SenchaTouchDemo.store.demo.Stock'
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
                    return args >=20;
                }
            }
        ),
        store: Ext.create('SenchaTouchDemo.store.demo.Stock'),
        listeners:{
            initialize:'init'
        }
    },
    init:function(){
        "use strict";

    }
});