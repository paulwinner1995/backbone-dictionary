import BaseView from 'base.view';
import DictionaryPageableCollection from 'dictionary.pageable.collection';
import WordView from 'word.view';
import DictionaryPaginationControlView from 'dictionary.pagination.control.view';
import _ from 'underscore';
import 'dictionary.page.template';

var DictionaryPageView = BaseView.extend({

    collection: DictionaryPageableCollection,

    template: 'dictionary.page.template',

    initialize: function () {
        this.paginationControlView = new DictionaryPaginationControlView({collection: this.collection});
        this.listenTo(this.collection, 'update', this.render);
    },

    render: function () {
        BaseView.prototype.render.call(this);
        _.each(this.collection.models, this._createView, this);

        var childSelector = this.$el.find('#paginationControls');
        this.paginationControlView.setElement(childSelector).render();

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