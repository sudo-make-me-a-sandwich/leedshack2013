/**
 * World View scene controller
 */
define(['app/Components/ElephantPuzzle'], function(ElephantPuzzle)
{
	/**
	 * Start this controller
	 * 
	 * @return void
	 */
	function start(view, cb)
	{
        this.puzzle = new ElephantPuzzle();
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
    	$('.elephantPuzzle .puzzleContent').hide();
    	
        this.puzzle.onClick(function() {
            $('.elephantPuzzle .puzzleContent').show();
        }.bind(this));
    }

	return {
		start: start,
        postRender: postRender
	}
});
