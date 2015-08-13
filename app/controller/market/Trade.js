/**
 * Created by Levana.Xue on 8/12/2015.
 */
Ext.define('SenchaTouchDemo.controller.market.Trade', {
    extend: 'Ext.app.Controller',
    requires: [],
    init: function () {
        //app 初始化时 执行一次
        console.log('in init()...');
    },
    config: {
        views: [
            'SenchaTouchDemo.view.market.Trade'
        ], control: {},
        refs: {}
    },
    launch: function () {
        console.log('in launch...')
    },
    test: function () {

    }
});