/**
 * Created by Levana.Xue on 8/19/2015.
 */
Ext.define('SenchaTouchDemo.commons.Util', {
    alternateClassName: ['util', 'app'],
    statics: {
        Account:{
            getSelAccountData:function(accNumP){
                var result = null;
                Ext.getStore('account').each(function (item, index, length) {
                    var accNumTemp = item.get('AccNum');
                    if(accNumTemp === accNumP){
                        result =item;
                    }
                })
                return result;
            }
        },
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
                //Viewport界面切换,切换时销毁旧项
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
                    app.Msg.alert('loading ...');
                });
            Ext.Ajax.on('requestcomplete',
                function (conn, response, options, eOpts ) {
                    app.Msg.hideMsgComponent();
                    var data = Ext.decode(response.responseText);
                    if (typeof data.Reject !== 'undefined') {
                        app.Msg.alert('response error : ' + data.Reject.SysMsg,false);
                    }
                });
            Ext.Ajax.on('requestexception',
                function (conn, response, options, eOpts) {
                    app.Msg.alert('loaded fail ...', false);
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

            Ext.data.Types.OrdTypeNameArray = {
                convert: function(v, data) {
                    console.log(data)
                    return new VELatLong(data.lat, data.long);
                },
                sortType: function(v) {
                    return v.Latitude;  // When sorting, order by latitude
                },
                type: 'OrdTypeNameArray'
            };

            //Ext.get(document).addListener();
            document.addEventListener("deviceready", this.onDeviceReady, false);
            this.test();
        },
        test:function(){
            Ext.define('Product', {
                extend: 'Ext.data.Model',
                config: {
                    identifier:{
                        type:'sequential'
                    },
                    fields: [
                        {name: 'name',    type: 'string'}
                    ],
                    proxy: {
                        type: "sql"
                    }
                }
            });
            Ext.define("User", {
                extend: "Ext.data.Model",
                config: {
                    identifier:{
                        type:'sequential'
                    },
                    fields: [ "firstName", "lastName" ],
                    hasMany: {model: 'Product', name: 'products'}
                },
                proxy: {
                    type: "sql"
                }
            });

            Ext.define('testReader', {
                extend: 'Ext.data.reader.Json',
                alias: 'reader.testReader',
                getResponseData: function (response) {
                    var data = this.callParent([response]);
                    var result = [];
                    console.log(response)
                    return result;
                }
            });

            Ext.create("Ext.data.Store", {
                model: "User",
                storeId: "Users",
                proxy:{
                    reader:{
                        type:'testReader'
                    }
                }
            });
            var user = Ext.getStore("Users");
            user.add({
                firstName: "Polly",
                lastName: "Hedra"
            });
            var products = user.getAt(0).products();
            products.add({
                name:'TEST0000005555550'
            })
            products.add({
                name:'TEST0000005555550999999999'
            })
            products.sync();
            user.sync();
           // console.log(user)
            gTest = user;
            //console.log(user.getAt(0))
        }
    }
});