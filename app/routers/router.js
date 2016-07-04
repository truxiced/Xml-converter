define([
    'jquery',
    'underscore',
    'backbone',
    'views/home/home',
    '../views/clientConverter/clientConverter',
    'views/backendConverter/backendConverter',
    'views/socketConverter/socketConverter'
], function ($, _, Backbone, Home, ClientConverter, BackendConverter, SocketConverter) {
    'use strict';

    var AppRouter = Backbone.Router.extend({
        routes: {
            "Home": "Home",
            "clientConverter": "clientConverter",
            "backendConverter": "backendConverter",
            "socketConverter": "socketConverter",
            "*actions" : "Home"

            // matches http://example.com/#anything-here
        },
        Home: function() {

            new Home();
        },

        clientConverter: function() {
            new ClientConverter();
        },

        backendConverter: function() {
            new BackendConverter();
        },

        socketConverter:function() {
            new SocketConverter();
        }

    });

// Start Backbone history a necessary step for bookmarkable URL's
 //   Backbone.history.start();

    return AppRouter;
});