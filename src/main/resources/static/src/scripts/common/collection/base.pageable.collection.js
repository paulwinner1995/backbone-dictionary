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
        isFirst: true,
        isLast: true,
    },

    queryParams: {
        currentPage: 'page',
        pageSize: 'size',
    },

    parseRecords: function (response) {
        return response.content;
    }
});

export default BasePageableCollection;