import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  Meteor.publish('tasks', function(){
      return Tasks.find({userId: this.userId});
  })
});
