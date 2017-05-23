
import '../templates/login.html';


Template.login.events({
    'submit form': function(event) {
        event.preventDefault();
    }
});

// jQuery Validation
Template.login.onRendered(function(){
    var validator = $('.login').validate({
        submitHandler: function(event){
            var email = $('[name=email]').val();
            var password = $('[name=password]').val();

            Meteor.loginWithPassword(email, password, function(error){
                if(error) {
                    if(error.reason == "User not found"){
                        validator.showErrors({
                            email: "That email doesn't belong to a registered user."
                        });
                    }
                    if(error.reason == "Incorrect password"){
                        validator.showErrors({
                            password: "You entered an incorrect password."
                        });
                    }
                } else {
                    var currentRoute = Router.current().route.getName();
                    if(currentRoute == "login") {
                        Router.go('/');
                    }

                }
            });
        }
    });
});


/*
* Validation messages errors from login & register forms
*/

$.validator.setDefaults({
    rules: {
        email: {
            required: true,
            email: true
        },
        password: {
            required: true,
            minlength: 6
        }
    },
    messages: {
        email: {
            required: "You must enter an email address.",
            email: "You've entered an invalid email address."
        },
        password: {
            required: "You must enter a password.",
            minlength: "Your password must be at least {0} characters."
        }
    }
});
