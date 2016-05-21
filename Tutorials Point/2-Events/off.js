/**
 * Created by UCHATNU on 5/21/2016.
 */

var Shop = Backbone.Model.extend({

    defaults:{
        name:"My shop"
    }

});


var shop = new Shop();

shop.on('event-1',function(){
    document.write(" I am Event 1 ");
});

shop.on('event-2',function(){
    document.write(" I am Event 2 ");
});


setInterval(function(){
    shop.trigger('event-1');
},2000)

setInterval(function(){
    shop.trigger('event-2');
    shop.off('event-2')
},4000)