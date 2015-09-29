/**
 * Created by Levana.Xue on 9/11/2015.
 */
Ext.define('SenchaTouchDemo.plugin.SamplePlugin', {
    alias: 'plugin.sampleplugin',
    requires: [
    ],
    config:{
        cmp: null,
        lableImg:''
    },
    constructor: function(config) {
        this.initConfig(config);
        this.callParent([config]);
    },
    init: function (cmp) {
        this.setCmp(cmp);
        var me = this;
        //console.log('in here plugins ...');
        //console.log(this)
        //console.log(cmp.element.dom)
        this.setImgLable(cmp);
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

    },
    setImgLable:function(cmp){
        var imgEle = document.createElement("div");
        imgEle.style.backgroundImage = "url("+this.getLableImg()+")";
        var extImgEle = new Ext.dom.Element(imgEle);
        extImgEle.addCls('inputPlugin');
        cmp.element.addCls('custom-plugin-style');
        //extImgEle.set({'data-content':"T"});
        cmp.element.down('.x-field-input').insertFirst(extImgEle);
    }
});