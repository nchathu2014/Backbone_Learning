/**
 * Created by UCHATNU on 5/21/2016.
 */

var Shop = Backbone.Model.extend({

    defaults:{
        name:"My shop"
    }

});


var shop = new Shop();

shop.once('event-once',function(){
    document.write("Run only once...");
});


setInterval(function(){
    shop.trigger('event-once');
},2000)