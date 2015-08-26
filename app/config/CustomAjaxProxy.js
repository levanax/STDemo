/**
 * Created by Levana.Xue on 8/26/2015.
 */
Ext.define('SenchaTouchDemo.config.CustomAjaxProxy', {
    override: 'Ext.data.proxy.Ajax',
    config:{
        actionMethods: {
            create  : 'POST',
            read    : 'POST',
            update  : 'POST',
            destroy : 'POST'
        }
    },
    setHeaders:function(headers){
        var headersTemp = {
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded'
        }
        return this.callParent([headersTemp]);
    },
    setWithCredentials:function(){
        return this.callParent([true]);
    },
    setUseDefaultXhrHeader:function(){
        return this.callParent([false]);
    }
})