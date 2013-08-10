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
		document.body.className = 'title';
		View.render($('#controller'), '/templates/Title', 'title', {method: 'html'});
	}
	
	return {
		start: start
	}
});