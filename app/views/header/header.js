define([
    'jquery',
    'underscore',
    'backbone',
    'text!./header.html',
    'css!./header'
], function ($, _, Backbone, template, style) {
    'use strict';

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

        },

        render: function () {

            this.$el.html(this.template());

            return this;
        },

        /**
         * Sets home link to active
         *
         */
        setHomeLink: function () {

            toggleLink.call(this,$("#home-item"));

        },

        /**
         * Sets client link to active
         *
         */
        setClientConverterLink: function () {
            toggleLink.call(this,$("#clientConverter-item"));
        },

        /**
         * Sets backend rest link to active
         *
         */
        setBackendConverterLink: function () {
            toggleLink.call(this,$("#backendConverter-item"));
        },

        /**
         * Sets backend socket link to active
         *
         */
        setSocketConverterLink: function () {
            toggleLink.call(this,$("#socketConverter-item"));
        }

    });

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