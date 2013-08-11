/**
 * Elephant puzzle component
 */
define(['app/View', 'app/Model/Inventory'], function (View, Inventory)
{
    function ElephantPuzzle()
    {
    	/**
    	 * Initialise this component
    	 * 
    	 * @return void
    	 */
    	this.init = function()
    	{
    		this.view = new View();
    	}
    	
    	/**
    	 * Render the puzzle
    	 * 
    	 * @return void
    	 */
    	this.render = function(cb)
    	{
        	this.view.hasLeaves = Inventory.hasItem('leaves');
            this.view.fetch('/templates/Components/ElephantPuzzle', 'puzzle').done(cb);
    	}
    	
        /**
         * On click actions
         * Can only be called post render
         * 
         * @return void
         */
    	this.onClick = function(cb)
    	{
    		$('.elephantPuzzle .puzzleTitle').click(cb);
    	}
    	
    	/**
    	 * Remove this puzzle from the UI
    	 * Can only be called post render
    	 * 
    	 * @return void
    	 */
    	this.remove = function()
    	{
    		$('.elephantPuzzle .puzzleContent').remove();
    	}
    }
    
    return ElephantPuzzle;
});
