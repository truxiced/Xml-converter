define([
    'jquery',
    'underscore',
    'backbone',
    'text!./simpleConverter.html',
    'css!./simpleConverter',
    '../../utils/converter'
], function ($, _, Backbone, template, style, Converter) {
    'use strict';

    var simpleConverter = Backbone.View.extend({

        el: '#main-container',
        // Compile our stats template
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
        $('#simpleConverter-convert').click(function(){
            var xml = Converter.convertToXML($('#simpleConverter-source').val());

            $('#simpleConverter-result').val(xml);
        })
    }

    return simpleConverter;
});