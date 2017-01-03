import $ from 'jquery';
import Backbone from 'backbone';
import DictionaryPageableCollection from 'dictionary.pageable.collection';
import DictionaryPageView from 'dictionary.page.view';

var AppRouter = Backbone.Router.extend({

    routes: {
        '': 'onHomeRoute',
        'words': 'onWordsRoute',
        'word/add': 'onWordAddRoute'
    },

    initialize: function () {
        this.parentElement = $('#page-content-wrapper');

        Backbone.history.start();
    },

    onHomeRoute: function () {
        this.navigate('words');
    },

    onWordsRoute: function () {
        var view = new DictionaryPageView({collection: new DictionaryPageableCollection}).render().$el;
        this.parentElement.append(view);
    },

    onWordAddRoute: function () {
        console.log('add word page');
    }
});

export default AppRouter;