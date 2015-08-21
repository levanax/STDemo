/**
 * Created by Levana.Xue on 8/19/2015.
 */
Ext.define('SenchaTouchDemo.commons.Util',{
    alternateClassName:'util',
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
        }
    }
});