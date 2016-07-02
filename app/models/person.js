define([
    'jquery',
    'underscore',
    'backbone'
], function ($, _, Backbone) {
    'use strict';

    var Person = Backbone.Model.extend({

        initialize: function () {

            this.family = [];

        },

        /**
         * Adds family model to this models attributes.
         *
         * @param family {Backbone.Model}
         */
        addFamily: function(family) {

            this.family.push(family);

            this.set({"family": this.family});
        },

        /**
         * Generates a xml formatted string of this models attributes.
         *
         * @returns {string}
         */
        toXML: function() {

            var xml = "<person>\n";

            xml += generateXML.call(this,this.attributes, xml);

            xml += "</person>\n";

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

            if(object[property] instanceof Backbone.Model){

                xml += object[property].toXML();

            } else if(Array.isArray(object[property])) {

                xml += generateXML(object[property]);

            }else if(object[property] instanceof  Object){

                xml += "<" + property +">\n";
                xml += generateXML(object[property]);
                xml += "</" + property +">\n";

            } else {

                xml += "<" + property + ">" + object[property] + "</" + property + ">\n";

            }

        }
        return xml;
    }

    return Person;
});