Ext.define('SenchaTouchDemo.view.commons.Menu', {
	extend: 'Ext.Toolbar',
	xtype: 'menu',
	requires: [
		'Ext.ux.TabMenuButton'
	],
	config: {
		items: [{
			itemId: "menu",
			xclass: 'Ext.ux.TabMenuButton',
			icon: 'resources/images/account.png',
			menuItems: [{
				text: 'Chats',
				iconCls: 'chats',
				handler: function() {
					// do something
				}
			}, {
				text: 'Contacts',
				iconCls: 'contacts',
				handler: function() {
					// do something
				}
			},{
				html:"<p>test ,this is long text.</p>"
			}]
		}],
		listeners: {
			initialize: "initializeCmp"
		}
	},
	initializeCmp: function() {
		console.log('in initialize....');
	}
});