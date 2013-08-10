/**
 * Base controller
 */
define(function()
{
	/**
	 * Init routines
	 * 
	 * @return this
	 */
	function init()
	{
		//set body height to be full height of browser
		$("body").css("height", $(document).height() + "px");
		
		//centre align things vertically & horizontally
		$(".center-align").each(function()
        {
			$(this).css({
				"margin-left": "-" + $(this).outerWidth() / 2 + "px",
				"margin-top": "-" + $(this).outerHeight() / 2 + "px",
				"position": "absolute",
				"left": "50%",
				"top": "50%"
			});
        });
		
		return this;
	}
	
	return {
		init: init
	}
});