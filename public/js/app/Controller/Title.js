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
		this.view = new View();
		
		document.body.className = 'title';
		this.view.render($('#controller'), '/templates/Title', 'title', {method: 'html'});
	}
	
	return {
		init: BaseController.init,
		start: start
	}
});