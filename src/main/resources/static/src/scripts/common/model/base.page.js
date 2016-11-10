import Backbone from 'backbone';

var Content = Backbone.Collection.extend({});

var BasePage = Backbone.Model.extend({

    defaults: {
        first: true,

        last: true,

        from: 0,

        to: 0,

        totalElements: 0,

        totalPages: 0,

        numberOfElements: 0,

        size: 5,

        number: 0,

        content: [],
    },

    url: function () {
        if (this.urlRoot == undefined)
            throw new Error('urlRoot is not defined');
        else
            return this.urlRoot + this._buildPageRequest();
    },

    initialize: function (options) {
        var size = (options && options.size) || this.get('size');
        this.set('size', size);

        this.collection = new Content;

        this.on('sync', this.onSync, this);
        this.on('change:number', this.onPageChange, this);
    },

    onSync: function (model, request, options) {
        this.set('from', this._startFrom());
        this.set('to', this._endTo());

        this.collection.add(request.content);
    },

    onPageChange: function (model, value, options) {
        this.collection.reset();
        this.fetch(options);
    },

    nextPage: function () {
        if (this._hasNext()) {
            var pageNumber = this.get('number');
            this.set('number', ++pageNumber);
        }
    },

    lastPage: function () {
        if (this._hasNext()) {
            this.set('number', this.get('totalPages') - 1);
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
    },

    _buildPageRequest: function () {
        var page = this.get('number');
        var size = this.get('size');

        return `?page=${page}&size=${size}`;
    },

    _startFrom: function () {
        var number = this.get('number');
        var size = this.get('size');

        return (number * size) + 1;
    },

    _endTo: function () {
        var from = this._startFrom();
        var numberOfElements = this.get('numberOfElements');

        return from + numberOfElements - 1;
    }
});

export default BasePage;