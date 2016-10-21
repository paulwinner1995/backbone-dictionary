'use strict';

define(function (require) {
    var Backbone = require('backbone');
        // template = require('');

    var DictionaryPageView = Backbone.View.extend({

        tagName: 'table',

        className: 'table',

        // TODO: This place should be replaced with real compiled template from separate file
        template: function () {
            return '<thead>' +
                '<tr>' +
                '<th>Word</th>' +
                '<th>Translation</th>' +
                '<th>Actions</th> ' +
                '</tr> ' +
                '</thead>' +
                '<tbody>' +
                '<tr>' +
                '<td>John</td>' +
                '<td>Doe</td>' +
                '<td>john@example.com</td>' +
                '</tr>' +
                '<tr>' +
                '<td>Mary</td>' +
                '<td>Moe</td>' +
                '<td>mary@example.com</td>' +
                '</tr> ' +
                '<tr>' +
                '<td>July</td>' +
                '<td>Dooley</td>' +
                '<td>july@example.com</td>' +
                '</tr>' +
                '</tbody>'
        },

        initialize: function () {

        },

        events: {

        },

        render: function () {
            this.$el.html(this.template({
                // TODO: Model should be given instead of empty object
            }));
            return this;
        }
    });

    return DictionaryPageView;
});