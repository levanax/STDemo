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
		scrollable: true,
		items: [{
			xtype: 'toolbar',
			title: 'Test',
			docked:'top',
			items: [{
				xtype: 'menu'
			}]
		}]
	},
	init: function() {
		"use strict";

	}
});