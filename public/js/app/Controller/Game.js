/**
 * Choose sport controller. :-)
 */
define(['app/Controller/Base', 'app/View'], function(BaseController, View)
{
	/**
	 * Start this controller
	 * 
	 * @return void
	 */
	function start()
	{
		var params = window.location.hash.match('game:([a-zA-Z]+)/');
		
		if (params && params.length) {
            var sceneName = params[1];
		}
        else {
            var sceneName = 'frontDoor';
        }
		
        View.scene = sceneName;
		View.render($('#controller'), '/templates/Game', 'game', {method: 'html'});
	}
	
	return {
		start: start
	}
});
