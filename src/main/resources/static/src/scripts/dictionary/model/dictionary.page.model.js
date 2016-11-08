'use strict';

define(function (require) {
    var BasePage = require('base.page'),
        WordModel = require('word.model');

    var DictionaryPage = BasePage.extend({

        urlRoot: '/words',

        model: WordModel,

        initialize: function (options) {
            BasePage.prototype.initialize.call(this, options);
            this.fetch();
        }
    });

    return DictionaryPage;
});