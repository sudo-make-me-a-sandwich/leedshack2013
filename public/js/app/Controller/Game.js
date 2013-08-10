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
			View.scene = params[1];
		}
		
		View.render($('#controller'), '/templates/Game', 'game', {method: 'html'});
	}
	
	return {
		start: start
	}
});