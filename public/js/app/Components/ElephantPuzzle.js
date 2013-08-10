/**
 * Elephant puzzle component
 */
define(['app/View', 'app/Model/Inventory'], function (View, Inventory)
{
    function ElephantPuzzle() {}

	/**
	 * Initialise this component
	 * 
	 * @return void
	 */
    ElephantPuzzle.prototype.init = function()
	{
       this.view = new View();
	}

    ElephantPuzzle.prototype.render = function(cb)
    {
    	this.view.hasLeaves = Inventory.hasItem('leaves');
        this.view.fetch('/templates/Components/ElephantPuzzle', 'puzzle').done(cb);
    }

    /**
     * Can only be called post render
     */
    ElephantPuzzle.prototype.onClick = function(cb)
    {
       $('.elephantPuzzle .puzzleTitle').click(cb);
    }

    ElephantPuzzle.prototype.remove = function() {
    	$('.elephantPuzzle .puzzleContent').remove();
    }
    
    return ElephantPuzzle;
});
