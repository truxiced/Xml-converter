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
        initialize: function(options){

            this.header = options.header;

        },

        Home: function() {

            this.header.setHomeLink();

            new Home();
        },

        clientConverter: function() {

            this.header.setClientConverterLink();

            new ClientConverter();
        },

        backendConverter: function() {

            this.header.setBackendConverterLink();

            new BackendConverter();
        },

        socketConverter:function() {

            this.header.setSocketConverterLink();

            new SocketConverter();
        }

    });

    return AppRouter;
});