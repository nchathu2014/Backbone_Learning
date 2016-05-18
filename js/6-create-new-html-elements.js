/**
 * Created by UCHATNU on 5/17/2016.
 */


//<span class="mySpan" id="myID">My New Span</span>

MyDiv = Backbone.View.extend({

    tagName:"span",
    className:"myClass",
    id:'myId',

    initialize:function(){
        console.log("initialize the view");
        console.log(this.el);
        console.log(this.$el);

        $('#myDiv').append(this.el);
        $("#"+this.el.id).append("I am text inside New HTML Element");
        console.log(this.el.id)

    }

})