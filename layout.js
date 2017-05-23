import { Template } from 'meteor/templating';


/**
 * Mapping between URLs and templates.
 *
 * In Meteor, both the client and the server know this mapping; one doesn't
 * simply navigate between pages.
 */

Router.configure({
    // the default layout that goes into <body>...</body>
    layoutTemplate: "defaultLayout",
    loadingTemplate: 'loading'
});

Router.route('/', function () {
    this.render("Homepage");
});

Router.route('/login', function () {
    this.render("login");
});

Router.route('/register', function () {
    this.render("register");
});

Router.route('/reservation', {
    name: 'reservation',
    template: 'reservation',
    data:function() {},
    onBeforeAction: function(){
        var currentUser = Meteor.userId();
        if(currentUser){
            // logged-in
            this.next();
        } else {
            // not logged-in
            this.render("login");
        }
    }
});

Router.route('/news', {
    name: 'news',
    template: 'news',
    data: function() {},
    onBeforeAction: function(){
        var currentUser = Meteor.userId();
        if(currentUser){
            // logged-in
            this.next();
        } else {
            // not logged-in
            this.render("login");
        }
    }
});

Router.route('/photos', {
    name: 'photos',
    template: 'photos',
    data: function() {},
    onBeforeAction: function(){
        var currentUser = Meteor.userId();
        if(currentUser){
            // logged-in
            this.next();
        } else {
            // not logged-in
            this.render("login");
        }
    }
});

Router.route('/journal', {
    name: 'journal',
    template: 'journal',
    data: function() { },
    onBeforeAction: function(){
        var currentUser = Meteor.userId();
        if(currentUser){
            // logged-in
            this.next();
        } else {
            // not logged-in
            this.render("login");
        }
    }
});

Router.route('/contacter', {
    name: 'contacter',
    template: 'contacter',
    data: function() {},
    onBeforeAction: function(){
        var currentUser = Meteor.userId();
        if(currentUser){
            // logged-in
            this.next();
        } else {
            // not logged-in
            this.render("login");
        }
    }
});


/**
 * Templates.
 */

if (Meteor.isClient) {

    Template.nav$Menu.events({
        'click .logout': function(event){
            event.preventDefault();
            Meteor.logout();
            Router.go('/');
        }
    });
}

