/**
 * Created by Levana.Xue on 8/13/2015.
 */
Ext.define('SenchaTouchDemo.controller.Viewer',{
    extend:'Ext.app.Controller',
    requires:[

    ],
    config:{
        //views写在此处作用有：若views 未初始化，便自动初始化
        views:['SenchaTouchDemo.view.Viewer'],
        refs:{
            viewer:{
                selector:'viewer', //must property
                xtype:'viewer',
                type: 'slide',
                direction: 'right',
                autoCreate:true
            },
            navView:'viewer',
            tabView:'main'
        },
        control:{
            tabView:{
                activeitemchange:'changeTitle',
                show:'changeTitle2'
            },
            navView:{
                back:'back'
            }
        },
        before:{
            goViewer:'routesIntercept' //[router method name : intercept name]
        },
        routes:{
            'viewer':'goViewer'
        }
    },
    changeTitle:function(container,value,oldValue,eOpts ){
        this.getNavView().getNavigationBar().setTitle(value.title);
    },
    back:function(container,eOpts ){
        var activeItem = container.getActiveItem();
        if(activeItem.getId() === 'main'){
            var title = activeItem.getActiveItem().title;
            this.getNavView().getNavigationBar().setTitle(title);
        }
    },
    changeTitle2:function(container,eOpts ){
    },
    routesIntercept:function(action){
        console.log('in routes intercept ...');
        if(app.user.isOnline()){
            action.resume();
        }else{

        }
    },
    goViewer:function(){
        //this.getViewer().show();
        Ext.Viewport.setActiveItem(this.getViewer());
    }
});