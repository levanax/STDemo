/**
 * Created by Levana.Xue on 9/25/2015.
 */
Ext.define('Ext.ux.side.Side', {
    extend: 'Ext.Button',
    xtype: 'side',
    alternateClassName: 'Ext.Side',
    isSide: true,
    config: {
        baseCls: Ext.baseCSSPrefix + 'side',
        pressedCls: Ext.baseCSSPrefix + 'side-pressed',

        activeCls: Ext.baseCSSPrefix + 'side-active',
        active: false,
        title: '&nbsp;'
    }
});