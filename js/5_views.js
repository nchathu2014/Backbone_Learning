/**
 * Created by UCHATNU on 5/17/2016.
 */

TestView = Backbone.View.extend({
    defaults:{},
    initialize:function(){
        console.log("View Initialize...")
        console.log(this.el);
        console.log(this.$el);

        this.$el.append("I am appended new para");
        this.$el.css('background-color','red').css('padding','10px').css('color','#fff');
    }
})
