import BaseView from 'base.view';
import DictionaryPageModel from 'dictionary.page.model';
import WordView from 'word.view';
import DictionaryPaginationControlView from 'dictionary.pagination.control.view';
import 'dictionary.page.template';

var DictionaryPageView = BaseView.extend({

    model: DictionaryPageModel,

    template: 'dictionary.page.template',

    initialize: function () {
        this.paginationControlView = new DictionaryPaginationControlView({model: this.model});
        this.listenTo(this.model.collection, 'update', this.render);
    },

    render: function () {
        BaseView.prototype.render.call(this);
        this.model.collection.each(this._createView, this);

        var childSelector = this.$el.find('#paginationControls');
        this.paginationControlView.setElement(childSelector).render();

        return this;
    },

    _renderModel: function () {
        return this.model.toJSON();
    },

    _createView: function (model) {
        var modelView = new WordView({model: model});
        this.$('#table-content').append(modelView.render().el);
    }
});

export default DictionaryPageView;