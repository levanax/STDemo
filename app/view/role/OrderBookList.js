/**
 * Created by Levana.Xue on 8/13/2015.
 */
Ext.define('SenchaTouchDemo.view.role.OrderBookList', {
    extend: "Ext.DataView",
    id:'orderBookList',
    xtype: 'orderBookList',
    requires: [
        'SenchaTouchDemo.store.role.OrderBook'
    ],
    config: {
        title: '列表',
        disableSelection: true,
        scrollable: {
            disabled: true
        },
        ui:'round',
        items:[
            {
                xtype: 'selectfield',
                name:'account',
                itemId:'accountOB',
                displayField:'exhibit',
                valueField:'AccNum'
            }
        ],
        styleHtmlCls:['table-tr-style-div','table-tr-style-title-div'],
        styleHtmlContent: true,
        html: [
            '<div class=\'firstChild\'>LastExecTime</div>',
            /*'<div>OrdID</div>',*/
            '<div>Security</div>',
            '<div>OrdSide</div>',
            '<div>OrdType</div>',
            '<div>OrdQty</div>',
            '<div>Price</div>',
        ].join(""),
        itemCls: 'table-tr-style-div',
        itemTpl: new Ext.XTemplate(
            '<tpl for=".">',
            '<tpl if="this.isShow(OrdID)">',
            '<div class=\'firstChild\'>{LastExecTime}</div>',
            /*'<div>{OrdID}</div>',*/
            '<div>{SecuritySctyID}.{SecurityMktCode}</div>',
            '<div>{OrdSide}</div>',
            '<div>{OrdType}</div>',
            '<div>{OrdQty}</div>',
            '<div>{Price}</div>',
            '</tpl>',
            '</tpl>',
            {
                compiled:true,
                isShow:function(args){
                    return args >=1000000;
                }
            }
        ),
        listeners:{
            itemsingletap:function(dataview,index,item,record,e){
                console.log('you click '+this.getStore().getAt(index).get('OrdID'));
            },
            activate:function(){
                //console.log('you show.');
            }
        }
    }
});