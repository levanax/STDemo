/**
 * Created by Levana.Xue on 8/13/2015.
 */
Ext.define('SenchaTouchDemo.view.role.OrderBook', {
    extend: "Ext.DataView",
    id:'orderBook',
    xtype: 'orderBook',
    requires: [
        'SenchaTouchDemo.store.role.OrderBook'
    ],
    config: {
        title: '列表',
        disableSelection: true,
        scrollable: {
            disabled: true
        },
        styleHtmlCls:'tableStyle-div-title',
        styleHtmlContent: true,
        html: [
            '<div>',
            '<div class=\'firstChild\'>LastExecTime</div>',
            '<div>OrdID</div>',
            '<div>Security</div>',
            '<div>OrdSide</div>',
            '<div>OrdType</div>',
            '<div>OrdQty</div>',
            '<div>Price</div>',
            '</div>'
        ].join(""),
        baseCls: 'tableStyle-div',
        itemTpl: new Ext.XTemplate(
            '<tpl for=".">',
            '<tpl if="this.isShow(OrdID)">',
            '<div class=\'firstChild\'>{LastExecTime}</div>',
            '<div>{OrdID}</div>',
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
        store: Ext.create('SenchaTouchDemo.store.role.OrderBook'),
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