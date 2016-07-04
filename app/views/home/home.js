define([
    'jquery',
    'underscore',
    'backbone',
    'text!./home.html',
], function ($, _, Backbone, template) {
    'use strict';

    var AppView = Backbone.View.extend({

        el: '#main-container',
        // Compile our stats template
        template: _.template(template),

        initialize: function () {

            this.render();

        },

        render: function () {

            this.$el.html(this.template());

            return this;
        }

    });
    return AppView;
});