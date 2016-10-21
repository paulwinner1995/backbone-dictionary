'use strict';

define(function (require) {
    var Backbone = require('backbone'),
        DictionaryPageView = require('dictionary/view/dictionary.page.view');

    var AppRouter = Backbone.Router.extend({

        routes: {
            '': 'home'
        },

        initialize: function () {
            this.parentElement = $('#page-content-wrapper');

            Backbone.history.start();
        },

        home: function () {
            var view = new DictionaryPageView().render().$el;
            this.parentElement.append(view);
        }
    });

    return AppRouter;
});