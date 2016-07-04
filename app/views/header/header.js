define([
    'jquery',
    'underscore',
    'backbone',
    'text!./header.html',
    'css!./header'
], function ($, _, Backbone, template, style) {
    'use strict';

    // Our overall **AppView** is the top-level piece of UI.
    var AppView = Backbone.View.extend({

        el: '#main-header',
        // Compile our stats template
        template: _.template(template),

        initialize: function () {

            this.render();

            /*
                Sets active link after the page have been rendered.
             */
            this.activeLink = $("#home-item");

            this.initializeHeaderLinkListeners();

        },

        render: function () {

            this.$el.html(this.template());

            return this;
        },

        /**
         * initializes all links contained in the header.
         *
         */
        initializeHeaderLinkListeners: function() {

            addhHomeLinkListener.call(this);

            addClientConverterListener.call(this);

            addBackendConverterListener.call(this);

            addSocketConverterListener.call(this);
        }

    });

    /**
     * Adds listeners for home link
     *
     * @private
     */
    function addhHomeLinkListener() {

        $("#home" ).click(function() {

            toggleLink.call(this,$("#home-item"));


        }.bind(this));
    }

    /**
     * Adds listeners for client converter link
     *
     * @private
     */
    function addClientConverterListener() {

        $("#clientConverter" ).click(function() {

            toggleLink.call(this,$("#clientConverter-item"));

        }.bind(this));
    }

    /**
     * Adds listeners for backend converter rest link
     *
     * @private
     */
    function addBackendConverterListener() {

        $("#backendConverter" ).click(function() {

            toggleLink.call(this,$("#backendConverter-item"));

        }.bind(this));
    }

    /**
     * Adds listeners for backend converter socket link
     *
     * @private
     */
    function addSocketConverterListener() {

        $("#socketConverter" ).click(function() {

            toggleLink.call(this,$("#socketConverter-item"));

        }.bind(this));
    }

    /**
     * Removes highlight from the current active link and add highlight on parameter element.
     *
     * @param element
     * @private
     */
    function toggleLink (element) {

        this.activeLink.removeClass("active");

        element.addClass("active");

        this.activeLink = element;

    }
    return AppView;
});