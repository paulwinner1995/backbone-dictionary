import BackbonePageableCollection from 'backbone.paginator';
import WordModel from 'word.model';

var DictionaryPageableCollection = BackbonePageableCollection.extend({

    url: '/words',

    model: WordModel,

    state: {
        firstPage: 0,
        pageSize: 5,

        // extra param
        from: 0,
        to: 0
    },

    queryParams: {
        pageSize: 'size',
        // extra params
        lang: function () { return this.state.language; },
        word: function () { return this.state.filter; }
    },

    constructor: function () {
        BackbonePageableCollection.prototype.constructor.apply(this);

        this.on('pageable:state:change', function () { this.fetch() }, this);

        this.fetch();
    },

    parseState: function (response) {
        var from = this._startFrom(response.totalElements, response.size, response.number);
        var to = this._endWith(response.totalElements, from, response.numberOfElements);

        return {
            totalPages: response.totalPages,
            totalRecords: response.totalElements,
            // set extra param
            from: from,
            to: to
        };
    },

    parseRecords: function (response) {
        return response.content;
    },

    setLanguage: function (language, options) {
        this._setStateProperty('language', language, options);
    },

    setFilter: function (filter, options) {
        this._setStateProperty('filter', filter, options);
    },

    _setStateProperty: function (name, value, options) {
        options = options || {silent: false};

        this.state[name] = value;

        if (!options.silent) this.trigger('pageable:state:change', this.state);
    },

    _startFrom: function (totalRecords, pageSize, currentPage) {
        return totalRecords ? pageSize * currentPage + 1 : 0;
    },

    _endWith: function (totalRecords, from, numberOfElements) {
        return totalRecords ? from + numberOfElements - 1 : 0;
    }
});

export default DictionaryPageableCollection;