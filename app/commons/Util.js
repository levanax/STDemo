/**
 * Created by Levana.Xue on 8/19/2015.
 */
Ext.define('SenchaTouchDemo.commons.Util', {
    alternateClassName: ['util', 'app'],
    statics: {
        Msg: {
            /* custom message component */
            msgComponentInit: false,
            component: null,
            componentState: 'hide',
            special: false,
            initMsgComponent: function () {
                Ext.Viewport.setMasked({
                    xtype: 'loadmask',
                    cls: 'message',
                    transparent: true,
                    indicator: false,
                    docked: 'bottom'
                });
                this.msgComponentInit = true;
                this.hideMsgComponent();
            },
            hideMsgComponent: function () {
                this.special = false;
                this.getMsgComponent().hide();
            },
            getMsgComponent: function () {
                return Ext.Viewport.getMasked();
            },
            alert: function (msg, autoHide) {
                if (this.componentState === 'show' && this.special) {
                    return false;
                } else {
                    //init
                    if (!this.msgComponentInit) {
                        this.initMsgComponent();
                    }

                    var message = this.getMsgComponent();
                    message.setMessage(msg);
                    message.show();
                    this.componentState = 'show';

                    if (this.component != null)
                        clearTimeout(this.component);

                    if (typeof autoHide === 'undefined' || autoHide) {
                        this.component = setTimeout(function () {
                                message.hide();
                                this.componentState = 'hide';
                                this.component = null;
                            },
                            1200);
                    } else {
                        this.special = true;
                    }
                }
            }
        },
        Viewport: {
            setActiveItem: function (xtype) {
                Ext.Viewport.setActiveItem(xtype, {
                    type: 'slide',
                    direction: 'right'
                });
            },
            addListen: function () {
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
        user: {
            username: null,
            setUsername: function (name) {
                this.username = name;
            },
            isOnline: function () {
                if (this.username == null) {
                    return false;
                } else {
                    return true;
                }
            }
        },
        errorDirector: function (errorMessage, scriptURI, lineNumber, columnNumber, error) {
            var val = {
                message: errorMessage,
                script: scriptURI,
                line: lineNumber,
                columnNumber: columnNumber,
                error: error
            };
            console.error('=====================  Uncaught Error   ===================')
            app.Msg.alert(errorMessage, false);
        },
        overrideAjax: function () {
            //ajax setting
            Ext.Ajax.on('beforerequest',
                function (connection, options) {
                    if (!options.hidMessage) {
                        app.Msg.alert('loading ...');
                    }
                });
            Ext.Ajax.on('requestcomplete',
                function (connection, options) {
                    app.Msg.hideMsgComponent();
                });
            Ext.Ajax.on('requestexception',
                function (connection, options) {
                    if (!options.hidMessage) {
                        app.Msg.alert('loaded fail ...', false);
                    }
                });
        },
        overrideDatePicker: function () {
            switch (locals.language) {
                case 'zh':
                    Ext.Date.monthNames = [
                        '一月', '二月', '三月', '四月', '五月', '六月',
                        '七月', '八月', '九月', '十月', '十一月', '十二月'
                    ];
                    Ext.Date.dayNames = ["周日", "星期一", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
                    break;
                default :
                    Ext.Date.monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                    Ext.Date.dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
                    break;
            }
        },
        viewerPushCount:0,
        onDeviceReady:function(){
            var test = 'Device platform: ' + Ext.device.Device.platform + '<br />' +
                'Device name: ' + Ext.device.Device.name + '<br />' +
                'Device UUID: ' + Ext.device.Device.uuid
            app.Msg.alert(test);
            Db.init();


            //listen back button ,exit app
            var onBackKeyDown = function(){
                var current = Ext.Viewport.getActiveItem().getId();
                if(app.viewerPushCount === 0 &&
                    (current === "viewer" || current === 'login')){
                    navigator.app.exitApp();
                }
            }
            document.addEventListener("backbutton",onBackKeyDown,false);

        },
        init: function () {
            window.onerror = this.errorDirector;
            this.Msg.initMsgComponent();
            this.Viewport.addListen();
            this.overrideDatePicker();
            this.overrideAjax();
            document.addEventListener("deviceready", this.onDeviceReady, false);
        }
    }
});