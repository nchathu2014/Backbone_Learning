/**
 * Created by UCHATNU on 5/17/2016.
 */


//create a model

StudentModel = Backbone.Model.extend({

    defaults:{
        id:577,
        name:"Nuwan Chathuranga"
    },

    initialize:function(){
        console.log("Initialized the Student Model");
    }
});




