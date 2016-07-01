define([
    'jquery',
    'underscore',
    'backbone',
    'text!./assignment.html'
], function ($, _, Backbone, statsTemplate) {
    'use strict';

    console.log("here")
    // Our overall **AppView** is the top-level piece of UI.
    var AppView = Backbone.View.extend({

        // Compile our stats template
        template: _.template(statsTemplate),

        initialize: function () {

            this.$container = this.$('.test');
            console.log(this.$container);

            this.render();
          //  this.listenTo(this.model, 'change', this.render);
          //  this.listenTo(this.model, 'destroy', this.remove);
          //  this.listenTo(this.model, 'visible', this.toggleVisible);
        },

        render: function () {

            this.$container.html(this.template("test: dert"));
            //this.$el.toggleClass('completed', this.model.get('completed'));

          //  this.toggleVisible();
          //  this.$input = this.$('.edit');
            return this;
        }

    });
    return AppView;
});