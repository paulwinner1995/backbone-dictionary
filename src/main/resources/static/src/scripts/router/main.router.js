'use strict';

define(function (require) {
    var Backbone = require('backbone');

    var AppRouter = Backbone.Router.extend({

        routes: {
            '': 'home'
        },

        initialize: function () {
            Backbone.history.start();
        },

        home: function () {
            console.log('home page');
        }
    });

    return AppRouter;
});