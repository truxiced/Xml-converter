define([
    'jquery',
    'underscore',
    'backbone'
], function ($, _, Backbone) {
    'use strict';

    var Family = Backbone.Model.extend({

        initialize: function () {


        },

        /**
         * Generates a xml formatted string of this models attributes.
         *
         * @returns {string}
         */
        toXML: function() {
            var xml = "<family>\n";

            xml += generateXML.call(this, this.attributes);

            xml += "</family>\n";
            return xml;
        }

    });

    /**
     * Recursive function which takes a object as parameter.
     * Iterates over the attribute in the object and creates xml tags for each attribute.
     *
     * @param object
     * @returns {string}
     * @Private
     */
    function generateXML(object) {
        if(!object) {
            return "";
        }
        var xml = "";

        for (var property in object) {

            if(object[property] instanceof  Object){

                xml += "<" + property +">\n";
                xml += generateXML(object[property]);
                xml += "</" + property +">\n";

            } else {

                xml += "<" + property + ">" + object[property] + "</" + property + ">\n";

            }

        }
        return xml;
    }

    return Family;
});