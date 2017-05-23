import { Meteor } from 'meteor/meteor';


Messages.allow({
    insert: function () {
        return true;
    },
    remove: function (){
        return true;
    },

    update: function() {
        return true;
    }
});
