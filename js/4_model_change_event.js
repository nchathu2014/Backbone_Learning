/**
 * Created by UCHATNU on 5/17/2016.
 */


Person = Backbone.Model.extend({

    defaults:{
        name:"Nuwan"
    },
    initialize:function(){
        console.log("Initialize the Person Model");
        this._changeName();

    },
    _changeName:function(){
        this.on('change:name',function(stdModel){
            console.log("Attribute Changed To..."+stdModel.get("name"))
        })
    }

});
