Tasks = new Mongo.Collection('tasks');

Meteor.methods({
    addTask: function(name){
        if(!Meteor.userId()){
            throw new Meteor.Error("no Access");
        }
        
        Tasks.insert({
            name: name,
            createdAt : new Date(),
            userId : Meteor.userId()
        });
    },
    
    deleteTask: function(taskId){
        Tasks.remove(taskId);
    }
})