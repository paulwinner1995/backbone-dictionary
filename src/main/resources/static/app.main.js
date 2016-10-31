require.config({
    baseUrl: 'dist/',

    paths: {
        jquery: '/libs/jQuery/dist/jquery.min',
        underscore: '/libs/underscore/underscore-min',
        backbone: '/libs/backbone/backbone-min',
        dust: '/libs/dustjs-linkedin/dist/dust-full.min'
    },

    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        },
        dust: {
            exports: 'dust'
        }

    },

    map: {
        '*': {
            'base.view': 'scripts/common/view/base.view',

            'dictionary.page.template': 'templates/dictionary/dictionary.page.template'
        }
    }
});

require([
    'scripts/router/main.router'
], function (AppRouter) {
    new AppRouter();
});
