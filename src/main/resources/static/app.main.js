require.config({
    paths: {
        underscore: 'libs/underscore',
        backbone: 'libs/backbone'
    }
});

require([], function () {
    console.log('requireJS works');
});
