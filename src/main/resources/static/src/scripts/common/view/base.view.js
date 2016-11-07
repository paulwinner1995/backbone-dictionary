'use strict';

define(function (require) {
    var Backbone = require('backbone'),
        template = require('dust.template');

    var BaseView = Backbone.View.extend({

        template: '',

        render: function () {
            var html = template.renderTemplate(this.template, this._renderModel());
            this.$el.html(html);
            return this;
        },

        _renderModel: function () {
            var model = this.model || {};
            return model.toJSON();
        }
    });

    return BaseView;
});