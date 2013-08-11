/**
 * Lif on earth west scene controller
 */
define(['app/Components/ButterflyPuzzle'], function(ButterflyPuzzle)
{
	/**
	 * Start this controller
	 * 
	 * @return void
	 */
	function start(view, cb)
	{
        this.puzzle = new ButterflyPuzzle();
        this.puzzle.init();
        
        this.puzzle.render(function(html)
        {
            view.components.push(html);
            cb();
        });
	}
	
	/**
	 * Post scene render actions
	 * 
	 * @return void
	 */
    function postRender()
    {
    	this.puzzle.onClick(function()
        {
            $('.butterflyPuzzle').show();
        }.bind(this));
    }

	return {
		start: start,
        postRender: postRender
	}
});
