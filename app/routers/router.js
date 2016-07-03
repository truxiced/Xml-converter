define([
    'jquery',
    'underscore',
    'backbone',
    'views/home/home',
    'views/simpleConverter/simpleConverter',
    'views/backendConverter/backendConverter',
    'views/socketConverter/socketConverter'
], function ($, _, Backbone, Home, SimpleConverter, BackendConverter, SocketConverter) {
    'use strict';

    var AppRouter = Backbone.Router.extend({
        routes: {
            "Home": "Home",
            "simpleConverter": "simpleConverter",
            "backendConverter": "backendConverter",
            "socketConverter": "socketConverter",
            "*actions" : "Home"

            // matches http://example.com/#anything-here
        },
        Home: function() {

            new Home();
        },

        simpleConverter: function() {
            new SimpleConverter();
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