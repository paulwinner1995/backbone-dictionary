import BaseView from 'base.view';
import DictionaryPageModel from 'dictionary.page.model';
import WordView from 'word.view';
import {} from 'dictionary.page.template';

var DictionaryPageView = BaseView.extend({

    model: DictionaryPageModel,

    template: 'dictionary.page.template',

    events: {
        'click #first': 'firstPage',
        'click #prev': 'prevPage',
        'click #next': 'nextPage',
        'click #last': 'lastPage'
    },

    initialize: function () {
        this.listenTo(this.model.collection, 'update', this.render);
    },

    render: function () {
        BaseView.prototype.render.call(this);
        this.model.collection.each(this._createView, this);
        return this;
    },

    _renderModel: function () {
        return this.model.toJSON();
    },

    _createView: function (model) {
        var modelView = new WordView({model: model});
        this.$('#table-content').append(modelView.render().el);
    },

    firstPage: function () {
        this.model.firstPage();
    },

    prevPage: function () {
        this.model.prevPage();
    },

    nextPage: function () {
        this.model.nextPage();
    },

    lastPage: function () {
        this.model.lastPage();
    }
});

export default DictionaryPageView;