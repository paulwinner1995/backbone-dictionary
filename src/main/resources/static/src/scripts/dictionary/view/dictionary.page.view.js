'use strict';

define(function (require) {

    require('dictionary.page.template');

    var BaseView = require('base.view'),
        DictionaryPageModel = require('dictionary.page.model'),
        WordView = require('word.view');

    var DictionaryPageView = BaseView.extend({

        model: DictionaryPageModel,

        template: 'dictionary.page.template',

        initialize: function () {
            this.listenTo(this.model.collection, 'update', this.render);
        },

        render: function () {
            BaseView.prototype.render.call(this);
            this.model.collection.each(this._createView, this);
            return this;
        },

        _createView: function (model) {
            var modelView = new WordView({model: model});
            this.$el.find('#table-content').append(modelView.render().el);
        },

        events: {}
    });

    return DictionaryPageView;
});