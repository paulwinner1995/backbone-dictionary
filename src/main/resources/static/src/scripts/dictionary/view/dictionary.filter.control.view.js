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

    _renderModel: function () {
        return { selectedLanguage: this.collection.state.language }
    },

    onSearch: function () {
        var filter = this.$el.find('input[name=filter]').val();
        this.collection.setFilter(filter);
    },

    onLanguageSelect: function () {
        var language = this.$el.find('#selectLanguage').val();
        this.collection.setLanguage(language);
    }
});

export default DictionaryFilterControlView;