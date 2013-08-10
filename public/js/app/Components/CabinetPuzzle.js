/**
 * Cabinet puzzle component
 */
define(['app/View', 'app/Model/Inventory'], function (View, Inventory)
{
    function CabinetPuzzle() {}

	/**
	 * Initialise this component
	 * 
	 * @return void
	 */
    CabinetPuzzle.prototype.init = function()
	{
       this.view = new View();
	}

    CabinetPuzzle.prototype.render = function(cb)
    {
        this.view.fetch('/templates/Components/CabinetPuzzle', 'puzzle').done(cb);
    }

    /**
     * Can only be called post render
     */
    CabinetPuzzle.prototype.onClick = function(cb)
    {
       $('.cabinetPuzzle .puzzleTitle').click(cb);
    }

    CabinetPuzzle.prototype.remove = function() {
    	$('.cabinetPuzzle .puzzleContent').remove();
    }
    
    return CabinetPuzzle;
});
