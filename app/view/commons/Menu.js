Ext.define('SenchaTouchDemo.view.commons.Menu', {
	extend: 'Ext.ux.TabMenuButton',
	xtype: 'menu',
	requires: [
	],
	config: {
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
		}],
		listeners: {
			initialize: "initializeCmp"
		}
	},
	initializeCmp: function() {
		console.log('in initialize....');
	}
});