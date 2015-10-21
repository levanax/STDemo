/**
 * Created by Levana.Xue on 9/25/2015.
 */
Ext.define('SenchaTouchDemo.view.test.Test', {
	extend: 'Ext.Container',
	xtype: 'test',
	requires: [
		'SenchaTouchDemo.view.commons.Menu'
	],
	config: {
		items:[
			{
				xtype: 'toolbar',
            	title: 'Test',
				items:[{
					xtype:'menu'
				}]
			}
		]
	},
	init: function() {
		"use strict";

	}
});