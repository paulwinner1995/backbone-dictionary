'use strict';

define(function (require) {
    var Backbone = require('backbone'),
        DictionaryPageModel = require('dictionary.page.model'),
        DictionaryPageView = require('dictionary.page.view');

    var AppRouter = Backbone.Router.extend({

        routes: {
            '': 'home'
        },

        initialize: function () {
            this.parentElement = $('#page-content-wrapper');

            Backbone.history.start();
        },

        home: function () {
            var view = new DictionaryPageView({model: new DictionaryPageModel}).render().$el;
            this.parentElement.append(view);
        }
    });

    return AppRouter;
});