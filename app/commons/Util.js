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
        errorDirector:function(errorMessage, scriptURI, lineNumber,columnNumber,error){
            var val = {
                message: errorMessage,
                script: scriptURI,
                line: lineNumber,
                columnNumber:columnNumber,
                error:error
            };
            console.error('=====================  Uncaught Error   ===================')
            app.Msg.alert(errorMessage,false);
        },
        overrideDatePicker:function(){
            switch (locals.language){
                case 'zh':
                    Ext.Date.monthNames = [
                        '一月', '二月', '三月', '四月', '五月', '六月',
                        '七月', '八月', '九月', '十月', '十一月', '十二月'
                    ];
                    Ext.Date.dayNames =  ["周日", "星期一", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
                    break;
                default :
                    Ext.Date.monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                    Ext.Date.dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
                    break;
            }
        },
        init:function(){
            window.onerror = this.errorDirector;
            this.Msg.initMsgComponent();
            this.Viewport.addListen();
            this.overrideDatePicker();

            try{
                app.Msg.alert([
                    'Device platform: ' + Ext.device.Device.platform,
                    'Device name: ' + Ext.device.Device.name,
                    'Device UUID: ' + Ext.device.Device.uuid
                ].join('\n'));

            }catch (e){
                Ext.Msg.alert(e);
            }
        }
    }
});