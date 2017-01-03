import BackbonePageableCollection from 'backbone.paginator';

var BasePageableCollection = BackbonePageableCollection.extend({

    state: {
        firstPage: 0,
        lastPage: 0,
        currentPage: 0,
        pageSize: 5,
        totalPages: null,
        totalRecords: null,
        sortKey: null,
        order: -1,

        // extra param
        from: 0,
        to: 0
    },

    queryParams: {
        pageSize: 'size',
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

    _startFrom: function (totalRecords, pageSize, currentPage) {
        return totalRecords ? pageSize * currentPage + 1 : 0;
    },
    
    _endWith: function (totalRecords, from, numberOfElements) {
        return totalRecords ? from + numberOfElements - 1 : 0;
    }
});

export default BasePageableCollection;