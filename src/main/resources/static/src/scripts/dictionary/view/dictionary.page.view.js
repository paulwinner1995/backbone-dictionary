import BaseView from 'base.view';
import WordView from 'word.view';
import DictionaryPageableCollection from 'dictionary.pageable.collection';
import DictionaryFilterControlView from 'dictionaty.filter.control.view';
import DictionaryPaginationControlView from 'dictionary.pagination.control.view';
import _ from 'underscore';
import 'dictionary.page.template';

var DictionaryPageView = BaseView.extend({

    collection: DictionaryPageableCollection,

    template: 'dictionary.page.template',

    initialize: function () {
        this.filterControlView = new DictionaryFilterControlView({collection: this.collection});
        this.paginationControlView = new DictionaryPaginationControlView({collection: this.collection});

        this.listenTo(this.collection, 'update', this.render);
    },

    render: function () {
        BaseView.prototype.render.call(this);

        var filterControlSelector = this.$el.find('#filterControls');
        this.filterControlView.setElement(filterControlSelector).render();

        _.each(this.collection.models, this._createView, this);

        var paginationControlSelector = this.$el.find('#paginationControls');
        this.paginationControlView.setElement(paginationControlSelector).render();

        return this;
    },

    _renderModel: function () {
        return this.collection.toJSON();
    },

    _createView: function (model) {
        var modelView = new WordView({model: model});
        this.$('#table-content').append(modelView.render().el);
    }
});

export default DictionaryPageView;