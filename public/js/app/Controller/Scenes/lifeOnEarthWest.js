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
	function start(view, cb, game)
	{
		this.keyChain = game.keyChain;
		this.puzzle = new ButterflyPuzzle();
		
		if (!this.keyChain.keyChain.hasKey("leedsArena"))
		{   
	        this.puzzle.init();
	        
	        this.puzzle.render(function(html)
	        {
	            view.components.push(html);
	            cb();
	        });
		} else {
			cb();
		}
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
            $('.butterflyPuzzle').show().reAlign();
        }.bind(this));
    	
    	this.puzzle.solve(function()
		{
    		alert("What! its not identical, thanks for noticing you can have this key.");
 	 	   	$('.startPuzzle, .butterflyPuzzle').remove();
 	 	   	this.keyChain.addKey("leedsArena");
		}.bind(this));
    }

	return {
		start: start,
        postRender: postRender
	}
});
