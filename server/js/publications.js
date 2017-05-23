import { Meteor } from 'meteor/meteor';

Meteor.publish('messages', function(){
    return Messages.find({}, { sort: { createdAt: -1 } });
});
