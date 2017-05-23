
import '../templates/register.html';


Template.register.events({
    'submit form': function(event) {
        event.preventDefault();
    }
});




// jQuery Validation
Template.register.onRendered(function(){
    var validator = $('.register').validate({
        submitHandler: function(event){
            var username = $('[name=username]').val();
            var email = $('[name=email]').val();
            var password = $('[name=password]').val();
            Accounts.createUser({
                username: username,
                email: email,
                password: password
            }, function(error){
                if(error){
                    // Output error if registration fails
                    if(error.reason == "Email already exists."){
                        validator.showErrors({
                            email: "That email already belongs to a registered user."
                        });
                    }
                } else {
                    Router.go("/"); // Redirect user if registration succeeds
                }
            });
        }
    });
});


if (Meteor.isServer) {

    Meteor.Users.insert({
        username: username,
        email: email,
        password: password,
        createdAt: ( new Date() ).toISOString()
    });
}

