import $ from 'jquery';
import Backbone from 'backbone';
import DictionaryPageModel from 'dictionary.page.model';
import DictionaryPageView from 'dictionary.page.view';

var AppRouter = Backbone.Router.extend({

    routes: {
        '': 'home'
    },

    initialize: function () {
        this.parentElement = $('#page-content-wrapper');

        Backbone.history.start();
    },

    home: function () {
        var view = new DictionaryPageView({model: new DictionaryPageModel}).render().$el;
        this.parentElement.append(view);
    }
});

export default AppRouter;