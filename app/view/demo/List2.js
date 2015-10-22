Ext.define('SenchaTouchDemo.view.demo.List2', {
	extend: 'Ext.Container',
	xtype: 'list2',
	requires: [
		'SenchaTouchDemo.view.commons.Menu'
	],
	config: {
		layout: Ext.os.deviceType == 'Phone' ? 'fit' : {
            type: 'vbox',
            align: 'center',
            pack: 'center'
        },
		scrollable: true,
		items: [{
			xtype: 'toolbar',
			title: 'Test',
			docked:'top',
			items: [{
				xtype: 'menu'
			}]
		}, {
			xtype:'list',
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
        store: Ext.create('SenchaTouchDemo.store.demo.Stock')
		}]
	},
	init: function() {
		"use strict";

	}
});