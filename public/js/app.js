requirejs.config(
{
    baseUrl: 'js/lib',
    paths: {
        app: '../app'
    }
});

require(['jquery', 'app/Router'], function($, Router)
{
    $(function() {
    	Router.route();
    });
});