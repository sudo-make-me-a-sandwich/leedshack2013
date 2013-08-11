/**
 * Entrance scene controller
 */
define(['app/Components/Key'], function(Key)
{
	/**
	 * Start this controller
	 * 
	 * @return void
	 */
	function start(view, cb, game)
	{
        cb();
	}
	
    function postRender()
    {
    }

	return {
		start: start,
        postRender: postRender
	}
});
