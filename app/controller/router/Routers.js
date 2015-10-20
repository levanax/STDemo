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
            },
            test:{
                selector:'test',
                xtype:'test',
                type: 'slide',
                direction: 'right',
                autoCreate:true
            },
            listDemo:{
                selector:'listDemo',
                xtype:'demoList',
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
            'viewer':'goViewer',
            'test':'goTest',
            'listDemo':'goListDemo'
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
        // Ext.Viewport.setActiveItem(this.getViewer());
        Ext.Viewport.setActiveItem(
            "viewer",{
            animation:{
                type:'slide',
                direction: 'right'
            }}
        );
    },
    goTest:function(){
        Ext.Viewport.setActiveItem(this.getTest());
    },
    goListDemo:function(){
        "use strict";
        Ext.Viewport.setActiveItem(this.getListDemo());
    }
});