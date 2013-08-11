/**
 * Elephant puzzle component
 */
define(['app/View', 'app/Model/Inventory', 'app/Model/Storage'], function (View, Inventory, Storage)
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
    		this.view.hasBeenFed = Storage.getData('ElephantPuzzle');
            this.view.fetch('/templates/Components/ElephantPuzzle', 'puzzle').done(cb);
    	}
    	
    	/**
    	 * Redraw the puzzle UI
    	 * 
    	 */
        this.redraw = function()
        {
            this.render(function(html) {
                $('.elephantPuzzle').replaceWith(html).reAlign();
            });
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
    		
    		$('.elephantPuzzle .hungry').click(function(element)
    		{
    			this.view.hasBeenFed = Inventory.hasItem('leaves');
    			Inventory.removeItem('leaves');
    			Storage.setData('ElephantPuzzle', true);
    			this.redraw();
    		}.bind(this));
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
