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
		$("body").css("height", $(document).height() + "px");
		
		return this;
	}
	
	return {
		init: init
	}
});