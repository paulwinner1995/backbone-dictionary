import BasePage from 'base.page';
import WordModel from 'word.model';

var DictionaryPage = BasePage.extend({

    urlRoot: '/words',

    model: WordModel,

    initialize: function (options) {
        BasePage.prototype.initialize.call(this, options);
        this.fetch();
    }
});

export default DictionaryPage;