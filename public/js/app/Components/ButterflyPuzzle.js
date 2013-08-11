/**
 * Butterfly puzzle component
 */
define(['app/View', 'app/Model/Inventory'], function (View, Inventory)
{
    function ButterflyPuzzle() { }
    
	/**
	 * Initialise this component
	 * 
	 * @return void
	 */
    ButterflyPuzzle.prototype.init = function()
	{
       this.view = new View();
	}

    ButterflyPuzzle.prototype.render = function(cb)
    {
        this.view.fetch('/templates/Components/ButterflyPuzzle', 'puzzle').done(cb);
    }

    /**
     * Can only be called post render
     */
    ButterflyPuzzle.prototype.onClick = function(cb)
    {
       $('.startPuzzle').click(cb);
    }
    
    ButterflyPuzzle.prototype.solve = function(cb)
    {
    	$('.solve').click(cb);
    }
    
    return ButterflyPuzzle;
});
