/**
 * Created by UCHATNU on 5/18/2016.
 */

TheView = Backbone.View.extend({

    initialize:function(){
        console.log("view initialization done");
        this.render();
    },
    render:function(){
        console.log("view rendering....");
        var template = _.template("<div>I am a template</div>",{});
        console.log(template)
        this.$el.html(template);
    }

});


var view_1 = new TheView({el:$('#container')});
