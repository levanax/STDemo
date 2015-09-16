/**
 * Created by Levana.Xue on 9/16/2015.
 */
Ext.define('SenchaTouchDemo.commons.SampleObservable', {
    mixins: {
        observable: "Ext.mixin.Observable"
    },
    config: {
        fullName: '',
        listeners: {
            quit: function() { // This function will be called when the 'quit' event is fired
                // By default, "this" will be the object that fired the event.
                console.log(this.getFullName() + " has quit!");
            }
        }
    },

    constructor: function(config) {
        this.initConfig(config);  // We need to initialize the config options when the class is instantiated
        this.mixins.observable.constructor.call(this, config);
        console.log('in SampleObservable ...');
    },

    quitJob: function() {
        this.fireEvent('quit');
    }
});


/*
 var newEmployee = Ext.create('SenchaTouchDemo.commons.SampleObservable', {
 fullName: 'Ed Spencer'
 });
 newEmployee.quitJob();
 */