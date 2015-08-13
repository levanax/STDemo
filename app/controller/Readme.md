This folder contains the controllers

*1.每增加一个控制器 都需要在 app.js 里 列出来，这样才会加载

控制器 关联 视图 示例
config: {
        views:[
            'SenchaTouchDemo.view.Login'
        ],
        control: {
            loginButton: {
                tap: 'doLogin'
            }
        },
        refs: {
            loginButton: 'button[itemId=loginBtn]'
        }
    },

//跨域请求示例
Ext.Ajax.request({
                url: 'http://192.168.1.7:3030/login/submit',
                method:'POST',
                params: params,
                withCredentials:true,
                headers:{
                    'Accept': 'application/json',
                    'Content-Type' : 'application/x-www-form-urlencoded'
                },
                useDefaultXhrHeader : false,
                success: function(response){
                    console.log(response);
                    var text = response.responseText;
                    // process server response here
                }
            });

 //panel为 Ext.navigation.View 时，切换到子视图，带 "Back" 按钮 (若不销毁
 var mainView = Ext.getCmp('main'); //main 是组件id
//mainView.removeAll(false,false);
mainView.push(Ext.create('SenchaTouchDemo.view.Home'));

//resolve Ext.navigation.View nest Ext.tab.panel ,title problem
ref url:
http://stackoverflow.com/questions/14866695/sencha-touch-navigation-view-changing-title-does-not-work-on-back-button