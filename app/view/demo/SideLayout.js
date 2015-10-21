Ext.define('SenchaTouchDemo.view.demo.SideLayout', {
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
		}, {
			height: 260
		}, {
			xtype: 'textfield',
			name: 'name',
			autoComplete: false,
			placeHolder: 'Enter your username'
		}, {
			xtype: 'passwordfield',
			autoComplete: false,
			name: 'password',
			maxLength: 16,
			placeHolder: 'Enter your password'
		}]
	},
	init: function() {
		"use strict";

	}
});