define([
    'jquery',
    'underscore',
    'backbone',
    'text!./simpleConverter.html',
    'css!./simpleConverter',
    '../../models/person',
    '../../models/family',
    '../../models/people'
], function ($, _, Backbone, template, style, Person, Family, People) {
    'use strict';

    // Our overall **AppView** is the top-level piece of UI.
    var AppView = Backbone.View.extend({

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
    
    function convertListener() {
        $('#simpleConverter-convert').click(function(){
            var xml = convert.call(this, $('#simpleConverter-source').val());
            $('#simpleConverter-result').val(xml);
        })
    }

    /**
     * Goes through the input parameter line by line and create Backbone Models were the data is stored until all lines have been iterated over.
     * Then a xml string is generated from the Model attributes.
     *
     * @param input
     * @returns {string}
     */
    function convert(input) {

        /*
            Splits the input into lines
         */
        var lines = input.split('\n');

        this.people = new People();
        this.person = undefined;
        this.family = undefined;

        lines.forEach(function(line){
            var sections = line.split('|');


                switch(sections[0]) {
                    case "P":

                        isPerson.call(this, sections);

                        break;
                    case "T":

                        isPhone.call(this, sections);

                        break;
                    case "A":

                        isAddress.call(this, sections);

                        break;
                    case "F":

                        isFamily.call(this, sections);

                        break;
                }
        }.bind(this));

        this.people.addPerson(this.person);

        return this.people.toXML();
    }

    /**
     * Determines if a Family Model should be added to a Person.
     * Determines if a Person Model should be added to People
     *
     * @param sections
     */
    function isPerson(sections) {
        if(this.family) {
            this.person.addFamily(this.family);
            this.family = undefined;
        }
        if(this.person) {
            this.people.addPerson(this.person);
        }
        this.person = new Person();
        this.person.set({"firstName": sections[1]});
        this.person.set({"lastName": sections[2]});
    }

    /**
     * Determines if phone should be added Family or Person Model.
     *
     * @param sections
     */
    function isPhone(sections) {

        var model = !this.family ? this.person : this.family;

        model.set({phone:{
            "mobile": sections[1],
            "landline": sections[2]
        }});

    }

    /**
     * Determines if address should be added Family or Person Model.
     *
     * @param sections
     */
    function isAddress(sections) {

        var model = !this.family ? this.person : this.family;

        model.set({address:{
            "street": sections[1],
            "city": sections[2],
            "zipcode": sections[3]
        }});

    }

    /**
     * If a Family Model already exist it should be added to the Person Model, then a new Family Model i created.
     *
     * @param sections
     */
    function isFamily(sections) {
        if(this.family) {
            this.person.addFamily(this.family);
        }

        this.family = new Family();
        this.family.set({"name": sections[1]});
        this.family.set({"born": sections[2]});
    }

    return AppView;
});