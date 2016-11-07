'use strict';

define(function (require) {

    require('dictionary.page.template');

    var BaseView = require('base.view'),
        DictionaryPageModel = require('dictionary.page.model'),
        WordView = require('word.view');

    var DictionaryPageView = BaseView.extend({

        template: 'dictionary.page.template',

        initialize: function () {

        },

        _renderModel: function () {
            return {};
        },

        events: {

        }
    });

    return DictionaryPageView;
});