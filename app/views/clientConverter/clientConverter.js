define([
    'jquery',
    'underscore',
    'backbone',
    'text!./clientConverter.html',
    'css!./clientConverter',
    '../../utils/converter'
], function ($, _, Backbone, template, style, Converter) {
    'use strict';

    var clientConverter = Backbone.View.extend({

        el: '#main-container',
        // Compile our stats template
        template: _.template(template),

        initialize: function () {

            this.render();

            addListenerForConvert.call(this);
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
    function addListenerForConvert() {
        $('#clientConverter-convert').click(function(){
            var xml = Converter.convertToXML($('#clientConverter-source').val());

            $('#clientConverter-result').val(xml);
        })
    }

    return clientConverter;
});