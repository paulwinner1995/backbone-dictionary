import BasePageableCollection from 'base.pageable.collection';
import WordModel from 'word.model';

var DictionaryPageableCollection = BasePageableCollection.extend({

    url: '/words',

    model: WordModel,

    constructor: function () {
        BasePageableCollection.prototype.constructor.apply(this);
        this.fetch();
    }
});

export default DictionaryPageableCollection;