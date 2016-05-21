/**
 * Created by UCHATNU on 5/21/2016.
 */

var Teacher = Backbone.Model.extend({});
var Student = Backbone.Model.extend({});

var teacher = new Teacher();
var student = new Student();

student.on('studying',function(){
    document.write("Student Studying...")
});

student.on('going-home',function(){
    document.write("Student Going Home...")
});

student.on('messy',function(){
    document.write("Student messy...")
});


teacher.listenTo(student,'going-home',function(){
    alert("Teacher said : Student is trying to going home");
});

setTimeout(function(){
    student.trigger('studying');
},2000);

setTimeout(function(){
    student.trigger('going-home');
},4000);

setTimeout(function(){
    student.trigger('messy');
},6000);









