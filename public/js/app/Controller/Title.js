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
		this.view.render($('#controller'), '/templates/Title', 'title', {method: 'html'}).done(function(){
			//centre align things vertically & horizontally
			$(".center-align").each(function()
	        {
				console.log("align center");
				$(this).css({
					"margin-left": "-" + $(this).outerWidth() / 2 + "px",
					"margin-top": "-" + $(this).outerHeight() / 2 + "px",
					"position": "absolute",
					"left": "50%",
					"top": "50%"
				});
	        });
		});
	}
	
	return {
		init: BaseController.init,
		start: start
	}
});