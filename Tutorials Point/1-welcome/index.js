/**
 * Created by UCHATNU on 5/21/2016.
 */


var AppView = Backbone.View.extend({

    el:"#container",
    initialize:function(){
        console.log("View initialized...");
        this.render();
    },
    render:function(){
        console.log(this.el);
        console.log(this.$el);
        this.$el.html("<h3>Hello World from Backbone...</h3>")
    }

});


