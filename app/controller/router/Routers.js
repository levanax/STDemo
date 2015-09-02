/**
 * Created by Levana.Xue on 8/27/2015.
 */
Ext.define('SenchaTouchDemo.controller.router.Routers',{
    extend:'Ext.app.Controller',
    requires:[

    ],
    config:{
        refs:{
            login:{
                selector:'login', //must property
                xtype:'login',
                type: 'slide',
                direction: 'right',
                autoCreate:true
            },
            viewer:{
                selector:'viewer', //must property
                xtype:'viewer',
                type: 'slide',
                direction: 'right',
                autoCreate:true
            }
        },
        before:{
            goViewer:'routesIntercept' //[router method name : intercept name]
        },
        routes:{
            'login':'goLogin',
            'viewer':'goViewer'
        }
    },
    routesIntercept:function(action){
        //console.log('in routes intercept here...');
        if(app.user.isOnline()){
            action.resume();
        }else{

        }
    },
    goLogin:function(){
        //this.getViewer().show();
        Ext.Viewport.setActiveItem(this.getLogin());
    },
    goViewer:function(){
        //this.getViewer().show();
        Ext.Viewport.setActiveItem(this.getViewer());
    }
});