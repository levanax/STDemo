This folder contains the models

-
verify 是验证数据用 model

/*
* json data 结构过于复杂，只做临时处理
* /


//自定义 file 里  数据类型
Ext.apply(Ext.data.Types,{
    MARKET:{
        convert: function(v, data) {
            return new VELatLong(data.lat, data.long);
        },
        sortType: function(v) {
            return v.Latitude;  // When sorting, order by latitude
        },
        type: 'market'
    }
});

[WARN][Ext.data.Batch#runOperation] Your identifier generation strategy for the model does not ensure unique id's. Please use the UUID strategy, or implement your own identifier strategy with the flag isUnique.
- identifier:{ type:'uuid' }


