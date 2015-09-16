/**
 * Created by Levana.Xue on 9/11/2015.
 */
Ext.define('SenchaTouchDemo.plugin.SamplePlugin', {
    alias: 'plugin.sampleplugin',
    requires: [
    ],
    config:{
        cmp: null
    },
    constructor: function(config) {
        this.initConfig(config);
        this.callParent([config]);
    },
    init: function (cmp) {
        this.setCmp(cmp);
        var me = this;
        console.log('in here plugins ...');
        cmp.on({
            initialize:me.initializePlug,
            /*initialize:{
                fn:function(){
                    console.log(arguments);
                }
            },*/
            scope: this
        });
    },
    initializePlug:function(){
    },
    destroy:function(){

    }
});