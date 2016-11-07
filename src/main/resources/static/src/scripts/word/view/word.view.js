'use strict';

define(function (require) {

    require('word.template');

    var BaseView = require('base.view');

    var WordView = BaseView.extend({

        template: 'word.template'
    });

    return WordView;
});