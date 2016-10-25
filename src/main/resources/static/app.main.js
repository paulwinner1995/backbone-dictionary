require.config({
    baseUrl: 'src/scripts/',

    paths: {
        jquery: '/libs/jQuery/dist/jquery.min',
        underscore: '/libs/underscore/underscore-min',
        backbone: '/libs/backbone/backbone-min'
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
        }
    }
});

require([
    'router/main.router'
], function (AppRouter) {
    new AppRouter();
});
