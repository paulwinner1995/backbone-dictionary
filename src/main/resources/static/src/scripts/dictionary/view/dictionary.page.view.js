'use strict';

define(function (require) {

    require('dictionary.page.template');

    var BaseView = require('base.view');

    var DictionaryPageView = BaseView.extend({

        tagName: 'table',

        className: 'table',

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