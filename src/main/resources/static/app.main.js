requirejs.config({
    baseUrl: 'dist/',

    paths: {
        'jquery': '/libs/jQuery/dist/jquery.min',
        'underscore': '/libs/underscore/underscore-min',
        'backbone': '/libs/backbone/backbone-min',
        'paginator': '/libs/backbone.paginator/lib/backbone.paginator.min',
        'dust': '/libs/dustjs-linkedin/dist/dust-full.min'
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
            'app.main': 'scripts/app.main',
            'dust.renderer': 'scripts/common/renderer/dust.renderer',
            'base.page': 'scripts/common/model/base.page',
            'base.view': 'scripts/common/view/base.view',

            'main.router': 'scripts/router/main.router',

            'dictionary.page.model': 'scripts/dictionary/model/dictionary.page.model',
            'dictionary.page.view': 'scripts/dictionary/view/dictionary.page.view',
            'dictionary.pagination.control.view': 'scripts/dictionary/view/dictionary.pagination.control.view',
            'dictionary.page.template': 'templates/dictionary/dictionary.page.template',
            'dictionary.pagination.control.template': 'templates/dictionary/dictionary.pagination.control.template',

            'word.model': 'scripts/word/model/word.model',
            'word.view': 'scripts/word/view/word.view',
            'word.template': 'templates/word/word.template'
        }
    }
});

require(['dust'], function (dust) { window.dust = dust; require(['app.main']); });