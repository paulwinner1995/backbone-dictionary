import Backbone from 'backbone';
import template from 'dust.template';

var BaseView = Backbone.View.extend({

    render: function () {
        if (this.template === undefined)
            throw new Error('template is not defined');

        var html = template.renderTemplate(this.template, this._renderModel());
        this.$el.html(html);
        return this;
    },

    _renderModel: function () {
        return {};
    }
});

export default BaseView;