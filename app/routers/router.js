define([
    'jquery',
    'underscore',
    'backbone',
    'views/home/home',
    'views/simpleConverter/simpleConverter'
], function ($, _, Backbone, Home, SimpleConverter) {
    'use strict';

    var AppRouter = Backbone.Router.extend({
        routes: {
            "Home": "Home",
            "simpleConverter": "simpleConverter",
            "*actions" : "Home"

            // matches http://example.com/#anything-here
        },
        Home: function() {

            new Home();
        },

        simpleConverter: function() {
            new SimpleConverter();
        }
    });

// Start Backbone history a necessary step for bookmarkable URL's
 //   Backbone.history.start();

    return AppRouter;
});