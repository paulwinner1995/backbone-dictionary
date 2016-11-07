'use strict';

define(function (require) {
    var Backbone = require('backbone');

    var DictionaryPage = Backbone.Collection.extend({

        totalElements: 0,

        totalPages: 0,

        numberOfElements: 0,

        size: 20,

        number: 0,

        url: function () {
            if (this.urlRoot == undefined)
                throw new Error('urlRoot is not defined');
            else
            // TODO: implement logic for fetch page from server
                return ''
        },

        initialize: function (options) {

        },

        nextPage: function () {

        },

        prevPage: function () {

        }
    });

    return DictionaryPage;
});