/**
 * Created by Levana.Xue on 8/14/2015.
 */
Ext.define('SenchaTouchDemo.store.role.OrderBook',{
    extend:'Ext.data.Store',
    storeId: 'orderBook',
    autoLoad: false,
    requires:[
        'SenchaTouchDemo.model.role.OrderBook'
    ],
    model:'SenchaTouchDemo.model.role.OrderBook',
    sorters:[
        {
            property:'LastExecTime',
            direction:'desc'
        },
        {
            property:'OrdID',
            direction:'asc'
        }
    ],
    data: [{
        "OrdID": 7410257,
        "Security": {
            "MktCode": "HK",
            "SctyID": 1
        },
        "GrpOrdID": 7410257,
        "OrdSide": "B",
        "OrdType": "L",
        "OrdQty": 1000,
        "InitQty": 1000,
        "Price": 115,
        "AvgPx": 0,
        "TimeInForce": 0,
        "InvestorCode": {},
        "OrdStatus": "REJ",
        "CumQty": 0,
        "SrcChnl": "W",
        "LastExecTime": "2015-08-14T09:59:26Z",
        "PrdLnCode": "HK-HKD",
        "OrderNum": 10982824,
        "LinkOrderNum": {}
    },{
        "OrdID": 7410256,
        "Security": {
            "MktCode": "HK",
            "SctyID": 1
        },
        "GrpOrdID": 7410257,
        "OrdSide": "B",
        "OrdType": "L",
        "OrdQty": 1000,
        "InitQty": 1000,
        "Price": 115,
        "AvgPx": 0,
        "TimeInForce": 0,
        "InvestorCode": {},
        "OrdStatus": "REJ",
        "CumQty": 0,
        "SrcChnl": "W",
        "LastExecTime": "2015-08-14T10:03:27Z",
        "PrdLnCode": "HK-HKD",
        "OrderNum": 10982824,
        "LinkOrderNum": {}
    },{
        "OrdID": 7410256,
        "Security": {
            "MktCode": "HK",
            "SctyID": 1
        },
        "GrpOrdID": 7410257,
        "OrdSide": "B",
        "OrdType": "L",
        "OrdQty": 1000,
        "InitQty": 1000,
        "Price": 115,
        "AvgPx": 0,
        "TimeInForce": 0,
        "InvestorCode": {},
        "OrdStatus": "REJ",
        "CumQty": 0,
        "SrcChnl": "W",
        "LastExecTime": "2015-08-14T11:54:28Z",
        "PrdLnCode": "HK-HKD",
        "OrderNum": 10982824,
        "LinkOrderNum": {}
    },{
        "OrdID": 7410257,
        "Security": {
            "MktCode": "HK",
            "SctyID": 1
        },
        "GrpOrdID": 7410257,
        "OrdSide": "B",
        "OrdType": "L",
        "OrdQty": 1000,
        "InitQty": 1000,
        "Price": 115,
        "AvgPx": 0,
        "TimeInForce": 0,
        "InvestorCode": {},
        "OrdStatus": "REJ",
        "CumQty": 0,
        "SrcChnl": "W",
        "LastExecTime": "2015-08-14T11:54:28Z",
        "PrdLnCode": "HK-HKD",
        "OrderNum": 10982824,
        "LinkOrderNum": {}
    },{
        "OrdID": 1000000,
        "Security": {
            "MktCode": "HK",
            "SctyID": 1
        },
        "GrpOrdID": 7410257,
        "OrdSide": "B",
        "OrdType": "L",
        "OrdQty": 1000,
        "InitQty": 1000,
        "Price": 115,
        "AvgPx": 0,
        "TimeInForce": 0,
        "InvestorCode": {},
        "OrdStatus": "REJ",
        "CumQty": 0,
        "SrcChnl": "W",
        "LastExecTime": "2015-08-14T11:54:28Z",
        "PrdLnCode": "HK-HKD",
        "OrderNum": 10982824,
        "LinkOrderNum": {}
    }]
});