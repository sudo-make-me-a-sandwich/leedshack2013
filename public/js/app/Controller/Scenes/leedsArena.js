/**
 * Leeds Arena scene controller
 */
define(['app/Components/Item'], function(Item)
{
	/**
	 * Start this controller
	 * 
	 * @return void
	 */
	function start(view, cb, game)
	{
        this.item = new Item();
        this.item.init('leaves');
        this.inventory = game.inventory;
        
        if (!this.inventory.inventory.hasItem(this.item.item))
        {
            this.item.render(function(html)
            {
                view.components.push(html);
                cb();
            });
        }
        else {
            cb();
        }
	}
	
    function postRender()
    {
        this.item.onPickup(function()
        {
            this.item.remove();
            this.inventory.addItem(this.item.item);
            alert('You picked up an item');
        }.bind(this));
    }

	return {
		start: start,
        postRender: postRender
	}
});
