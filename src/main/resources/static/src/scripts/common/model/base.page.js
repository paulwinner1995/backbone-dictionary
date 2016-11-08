'use strict';

define(function (require) {
    var Backbone = require('backbone');

    var Content = Backbone.Collection.extend({});

    var BasePage = Backbone.Model.extend({

        defaults: {
            first: true,

            last: true,

            totalElements: 0,

            totalPages: 0,

            numberOfElements: 0,

            size: 20,

            number: 0,

            content: [],
        },

        url: function () {
            if (this.urlRoot == undefined)
                throw new Error('urlRoot is not defined');
            else
                return this.urlRoot + '?page=' + this.number + '&size=' + this.size;
        },

        initialize: function (options) {
            var size = (options && options.size) || this.get('size');
            this.set('size', size);

            this.collection = new Content;

            this.on('sync', this.onSync, this);
            this.on('change:number', this.fetch, this);
        },

        onSync: function (model, request, options) {
            this.collection.add(request.content);
        },

        nextPage: function () {
            if (this._hasNext()) {
                var pageNumber = this.get('number');
                this.set('number', ++pageNumber);
            }
        },

        lastPage: function () {
            if (this._hasNext()) {
                this.set('number', this.get('totalPages'));
            }
        },

        prevPage: function () {
            if (this._hasPrev()) {
                var pageNumber = this.get('number');
                this.set('number', --pageNumber);
            }
        },

        firstPage: function () {
            if (this._hasPrev()) {
                this.set('number', 0)
            }
        },

        _hasNext: function () {
            return !this.get('last');
        },

        _hasPrev: function () {
            return !this.get('first');
        }
    });

    return BasePage;
});