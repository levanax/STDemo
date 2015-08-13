/**
 * Created by Levana.Xue on 8/13/2015.
 */
Ext.define('SenchaTouchDemo.view.market.Trade',{
    extend:'Ext.carousel.Carousel',
    xtype:'marketTrade',
    requires:[
        'SenchaTouchDemo.controller.market.Trade'
    ],
    config:{
        direction:'horizontal',
        fullscreen: true,
        defaults:{
            styleHtmlContent:true
        },
        items: [
            {
                html : 'Item 1',
                style: 'background-color: #5E99CC'
            },
            {
                html : 'Item 2',
                style: 'background-color: #759E60'
            },
            {
                html : 'Item 3'
            }
        ]
    }
});