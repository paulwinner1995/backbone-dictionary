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
            'base.page': 'scripts/common/model/base.page',
            'base.view': 'scripts/common/view/base.view',

            'dictionary.page.model': 'scripts/dictionary/model/dictionary.page.model',
            'dictionary.page.view': 'scripts/dictionary/view/dictionary.page.view',
            'dictionary.page.template': 'templates/dictionary/dictionary.page.template',

            'word.model': 'scripts/word/model/word.model',
            'word.view': 'scripts/word/view/word.view',
            'word.template': 'templates/word/word.template'
        }
    }
});

require(['dust'], (dust) => {
    window.dust = dust;
    require(['scripts/router/main.router'], (AppRouter) => new AppRouter())
});
