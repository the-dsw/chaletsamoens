import { Template } from 'meteor/templating';

import '../templates/journal.html';

let userId = Meteor.userId();

//subscribe 10 messages
Meteor.subscribe('messages', 10);


Template.journal$comments.helpers({
    messages: function () {
        return Messages.find({}, {
            sort: { createdAt: -1 }
        });
    },
    // TODO: add photo to users, make a profile upload
    message: {
        photo: ['images/yuna.jpg'],
    }
});

UI.registerHelper('formatTime', function(context, options) {
    if(context)
        return moment(context).format('DD/MM/YYYY, HH:MM');
});

Template.journal$form.helpers({
    disableButton() {
        if (Session.get('numChars') <= 0) {
            return 'disabled';
        }
    }
});

Template.journal$form.onRendered(function () {
    Session.set('numChars', 0);
});

Template.journal$form.events({
    'input #comments'(){
        Session.set('numChars', $('#comments').val().length);
    },
    'submit form'(e) {
        e.preventDefault();

        const message =  $('#comments').val();

        // Add messages
        if (Meteor.user()) {
            Messages.insert({
                commentId: userId,
                message: message,
                user: Meteor.user().username,
                createdAt: ( new Date() ).toISOString()
            });
        }
        // Clear form
        $('#comments').val('');
        Session.set('numChars', 0);
        console.log('Message added successfully!');
    }

});



