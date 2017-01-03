import BaseView from 'base.view';
import DictionaryPageableCollection from 'dictionary.pageable.collection';
import 'dictionary.pagination.control.template';

var DictionaryPaginationControlView = BaseView.extend({
    
    template: 'dictionary.pagination.control.template',

    collection: DictionaryPageableCollection,
    
    events: {
        'click #first': 'onFirstPage',
        'click #prev': 'onPreviousPage',
        'click #next': 'onNextPage',
        'click #last': 'onLastPage'
    },

    _renderModel: function () {
        return this.collection.state;
    },
    
    onFirstPage: function () {
        this.collection.getFirstPage();
    },
    
    onPreviousPage: function () {
        this.collection.getPreviousPage();
    },
    
    onNextPage: function () {
        this.collection.getNextPage();
    },
    
    onLastPage: function () {
        this.collection.getLastPage();
    }
});

export default DictionaryPaginationControlView;