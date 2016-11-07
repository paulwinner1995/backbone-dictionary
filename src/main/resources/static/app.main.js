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
            'dust.template': 'scripts/common/template/dust.template',
            'base.view': 'scripts/common/view/base.view',

            'dictionary.page.template': 'templates/dictionary/dictionary.page.template',
            'word.template': 'templates/word/word.template'
        }
    }
});

require(['dust'], (dust) => {
    window.dust = dust;
    require(['scripts/router/main.router'], (AppRouter) => new AppRouter())
});
