define([
    'jquery',
    'underscore',
    'backbone',
    'text!./socketConverter.html',
    'css!./socketConverter',
    '../../utils/converter',
    'socketio'
], function ($, _, Backbone, template, style, Converter, io) {
    'use strict';

    var socketConverter = Backbone.View.extend({

        el: '#main-container',
        // Compile our stats template
        template: _.template(template),

        initialize: function () {

            this.render();

            this.socket = io.connect();

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

        $('#socketConverter-convert').click(function(){
            var model = Converter.convertToModel($('#socketConverter-source').val());

            this.socket.emit("json2xml",model.toJSON());

            this.socket.on("json2xml", function(xml) {

                $('#socketConverter-result').val(xml);

            })
        }.bind(this))
    }

    return socketConverter;
});