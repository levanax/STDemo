/**
 * Created by Levana.Xue on 8/21/2015.
 */
Ext.define('SenchaTouchDemo.model.Sessioninfo', {
    extend: 'Ext.data.Model',
    config: {
        fields:[
            "BrokerId",
            "Length",
            "RefSeqNum",
            "SendTime",
            "SeqNum",
            "SessId",
            "Version"
        ]
    }
});
console.log('in here session info model l................')