import Backbone from 'backbone';
import DustRenderer from 'dust.renderer';

var BaseView = Backbone.View.extend({

    render: function () {
        if (this.template === undefined)
            throw new Error('template is not defined');

        const html = DustRenderer.render(this.template, this._renderModel());

        this._fillEl(html);

        return this;
    },

    _renderModel: function () {
        return {};
    },

    _fillEl: function (plainHtml) {
        this.$el.html(plainHtml);
    }
});

export default BaseView;