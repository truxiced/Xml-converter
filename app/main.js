/*global require*/
'use strict';

require.config({
    // The shim config allows us to configure dependencies for
    // scripts that do not call define() to register a module
    shim: {

        socketio: {
            exports: 'io'
        },
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        },
        backboneLocalstorage: {
            deps: ['backbone'],
            exports: 'Store'
        }
    },
    paths: {
        jquery: '../node_modules/jquery/dist/jquery',
        underscore: '../node_modules/underscore/underscore',
        backbone: '../node_modules/backbone/backbone',
        backboneLocalstorage: '../node_modules/backbone.localstorage/backbone.localStorage',
        text: '../node_modules/requirejs-text/text',
        css: '../node_modules/require-css/css',
        socketio: '../node_modules/socket.io/node_modules/socket.io-client/socket.io'
    }
});

require([
    'backbone',
    'views/header/header',
    'routers/router'
], function (Backbone, Header, Workspace) {
    
    // Initialize routing and start Backbone.history()
    new Workspace();

    Backbone.history.start();

    // Initialize the application view
    new Header();
});