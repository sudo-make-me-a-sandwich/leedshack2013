/**
 * Elephant puzzle component
 */
define(['app/View'], function (View)
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
        this.view.fetch('/templates/Components/ElephantPuzzle', 'puzzle').done(cb);
    }

    return ElephantPuzzle;
});
