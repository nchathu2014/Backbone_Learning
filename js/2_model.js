/**
 * Created by UCHATNU on 5/17/2016.
 */


//create a model
CustomModel = Backbone.Model.extend({
    //lifecycle function
    initialize:function(){
        console.info("Model Initialize Complete...:)");
    }

});

$(document).ready(function(){
    var modelInstance1 = new CustomModel();
    console.info(modelInstance1);


});

