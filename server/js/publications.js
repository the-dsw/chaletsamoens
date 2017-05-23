import { Meteor } from 'meteor/meteor';

Meteor.publish('messages', function(limit){
    return Messages.find({}, {
        limit: limit || 10,
        sort: { createdAt: -1 }
    });
});
