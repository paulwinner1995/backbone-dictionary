import BaseView from 'base.view';
import DictionaryPageModel from 'dictionary.page.model';
import 'dictionary.pagination.control.template';

var DictionaryPaginationControlView = BaseView.extend({
    
    template: 'dictionary.pagination.control.template',

    model: DictionaryPageModel,
    
    events: {
        'click #first': 'onFirstPage',
        'click #prev': 'onPreviousPage',
        'click #next': 'onNextPage',
        'click #last': 'onLastPage'
    },

    _renderModel: function () {
        return this.model.toJSON();
    },
    
    onFirstPage: function () {
        this.model.firstPage();
    },
    
    onPreviousPage: function () {
        this.model.prevPage();
    },
    
    onNextPage: function () {
        this.model.nextPage();
    },
    
    onLastPage: function () {
        this.model.lastPage();
    }
});

export default DictionaryPaginationControlView;