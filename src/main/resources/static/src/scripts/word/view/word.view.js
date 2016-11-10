import BaseView from 'base.view';
import WordModel from 'word.model';
import {} from 'word.template';

var WordView = BaseView.extend({

    tagName: 'tr',

    className: 'row',

    model: WordModel,

    template: 'word.template',

    _renderModel: function () {
        return this.model.toJSON();
    }
});

export default WordView;