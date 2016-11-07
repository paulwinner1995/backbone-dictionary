'use strict';

define(function (require) {

    require('word.template');

    var BaseView = require('base.view'),
        WordModel = require('word.model');

    var WordView = BaseView.extend({

        tagName: 'tr',

        className: 'row',

        template: 'word.template',

        _renderModel: function () {
            return this.model.toJSON();
        }
    });

    return WordView;
});