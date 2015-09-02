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
        }
    },
    changeTitle:function(container,value,oldValue,eOpts ){
        this.getNavView().getNavigationBar().setTitle(value.initialConfig.title);
    },
    back:function(container,eOpts ){
        var activeItem = container.getActiveItem();
        if(activeItem.getId() === 'main'){
            var title = activeItem.getActiveItem().initialConfig.title;
            this.getNavView().getNavigationBar().setTitle(title);
        }
    },
    changeTitle2:function(container,eOpts ){
    }
});