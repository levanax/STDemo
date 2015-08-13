/**
 * Created by Levana.Xue on 8/13/2015.
 */
Ext.define('SenchaTouchDemo.controller.Viewer',{
    extend:'Ext.app.Controller',
    requires:[

    ],
    config:{
        views:['SenchaTouchDemo.view.Viewer','SenchaTouchDemo.view.Main'],
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
    }
});