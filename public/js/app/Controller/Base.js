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

		return this;
	}
	
	return {
		init: init
	}
});