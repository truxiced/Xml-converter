define([
    'jquery',
    'underscore',
    'backbone'
], function ($, _, Backbone) {
    'use strict';

    var People = Backbone.Model.extend({

        url: function(){
            return "test"
        },

        defaults: {
            person: '',  // Some string
        },

        initialize: function () {

            this.persons = [];



        },

        /**
         * Adds person model to this models attributes.
         *
         * @param person {Backbone.Model}
         */
        addPerson: function(person) {
            this.persons.push(person);

            this.set({"person":this.persons});
        },

        /**
         * Generates a xml formatted string of this models attributes.
         *
         * @returns {string}
         */
        toXML: function() {
            var xml = "<people>\n";

            this.persons.forEach(function(derp) {
                xml += derp.toXML();
            });

            xml += "</people>";
            return xml;
        }

    });

    return People;
});