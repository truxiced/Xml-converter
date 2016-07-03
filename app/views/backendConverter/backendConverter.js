define([
    'jquery',
    'underscore',
    'backbone',
    'text!./backendConverter.html',
    'css!./backendConverter',
    '../../utils/converter'
], function ($, _, Backbone, template, style, Converter) {
    'use strict';

    var backendConverter = Backbone.View.extend({

        el: '#main-container',

        template: _.template(template),

        initialize: function () {

            this.render();

            convertListener.call(this);
        },

        render: function () {

            this.$el.html(this.template());

            return this;
        }

    });

    /**
     * Uses Converter to to generate a XML from the input in the textArea.
     *
     */
    function convertListener() {

        $('#backendConverter-convert').click(function(){
            var model = Converter.convertToModel($('#backendConverter-source').val());

            model.save({},{
                success: function(model,response) {

                }, error: function(model,response) {
                    console.log("error flow");

                    $('#backendConverter-result').val(response.responseText);
                }
            });
        })
    }

    return backendConverter;
});