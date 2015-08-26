/**
 * Created by Levana.Xue on 8/19/2015.
 */
Ext.define('SenchaTouchDemo.commons.Util',{
    alternateClassName:['util','app'],
    statics:{
        Msg:{
            /* custom message component */
            msgComponentInit:false,
            initMsgComponent: function () {
                Ext.Viewport.setMasked({
                    xtype: 'loadmask',
                    cls:'message',
                    transparent: true,
                    indicator: false,
                    docked:'bottom'
                });
                this.msgComponentInit = true;
                this.hideMsgComponent();
            },
            hideMsgComponent: function () {
                this.getMsgComponent().hide();
            },
            getMsgComponent: function () {
                return Ext.Viewport.getMasked();
            },
            alert: function (mes, autoHide) {
                if(!this.msgComponentInit){
                    this.initMsgComponent();
                }
                var message = this.getMsgComponent();
                message.setMessage(mes);
                message.show();
                if (typeof autoHide === 'undefined' || autoHide) {
                    setTimeout(function () {
                            message.hide();
                        },
                        1200);
                }
            }
        },
        Viewport:{
            setActiveItem:function(xtype){
                Ext.Viewport.setActiveItem(xtype, {
                    type: 'slide',
                    direction: 'right'
                });
            },
            addListen:function () {
                //监控Viewport界面切换,切换时销毁旧项
                var me = Ext.Viewport;
                me.onAfter('activeitemchange',
                    function (t, value, oldValue, eOpts) {
                        if (oldValue) {
                            me.remove(oldValue, true);
                        }
                    });
            }
        },
        user:{
            username:null,
            setUsername:function(name){
                this.username = name;
            },
            isOnline:function(){
                if(this.username == null){
                    return false;
                }else{
                    return true;
                }
            }
        },
        init:function(){
            console.log('******** init app ******');
            this.Msg.initMsgComponent();
            this.Viewport.addListen();
        }
    }
});