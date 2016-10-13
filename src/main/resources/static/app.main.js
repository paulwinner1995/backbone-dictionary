require.config({
    baseUrl: 'src/scripts/',

    paths: {
        jquery: '/libs/jquery-3.1.1',
        underscore: '/libs/underscore',
        backbone: '/libs/backbone'
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
