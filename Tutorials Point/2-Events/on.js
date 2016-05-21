/**
 * Created by UCHATNU on 5/21/2016.
 */


//================ Bind Events to Objects

var myObj={}
_.extend(myObj,Backbone.Events);



myObj.on('myFunc',function(){
    document.write("Event Fires");
});


myObj.trigger('myFunc');


//=============== Bind Events to Models

var Person = Backbone.Model.extend({
    defaults:{
        id:"",
        name:""
    }
});


var person = new Person();
person.on("something",function(){
    document.write("Person Event Fires");
});

person.trigger('something');






