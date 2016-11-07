'use strict';

define(function (require) {
    var Backbone = require('backbone'),
        WordModel = require('word.model');

    var DictionaryPage = Backbone.Collection.extend({

        urlRoot: '/words',

        model: WordModel,

        first: true,

        last: true,

        totalElements: 0,

        totalPages: 0,

        numberOfElements: 0,

        size: 20,

        number: 0,

        url: function () {
            if (this.urlRoot == undefined)
                throw new Error('urlRoot is not defined');
            else
                return this.urlRoot + '?page=' + this.number + '&size=' + this.size;
        },

        initialize: function (options) {
            this.on('sync', this.onSync, this);
        },

        onSync: function (collection, responce, options) {
            this.first = responce.first;
            this.last = responce.last;
            this.totalElements = responce.totalElements;
            this.totalPages = responce.totalPages;
            this.numberOfElements = responce.numberOfElements;
            this.number = responce.number;
            this.add(responce.content);
        },

        nextPage: function () {

        },

        lastPage: function () {

        },

        prevPage: function () {

        },

        firstPage: function () {

        }
    });

    return DictionaryPage;
});