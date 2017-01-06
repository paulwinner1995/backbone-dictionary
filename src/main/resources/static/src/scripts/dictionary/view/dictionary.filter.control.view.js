import BaseView from 'base.view';
import DictionaryPageableCollection from 'dictionary.pageable.collection';
import 'dictionary.filter.control.template';

var DictionaryFilterControlView = BaseView.extend({

    template: 'dictionary.filter.control.template',

    collection: DictionaryPageableCollection,

    events: {
        'click  #submitSearch'  : 'onSearch',
        'change #selectLanguage': 'onLanguageSelect'
    },

    onSearch: function () {},

    onLanguageSelect: function () {}
});

export default DictionaryFilterControlView;