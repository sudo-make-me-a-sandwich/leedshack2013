/**
 * Inventory item controller
 */
define(['app/View'], function (View)
{
    function Item() {}

	/**
	 * initialise this controller
	 * 
	 * @return void
	 */
    Item.prototype.init = function(item)
	{
       this.view = new View();
       this.view.item = item;
       this.item = item;

	}

    Item.prototype.render = function(cb) {
        this.view.fetch('/templates/Components/item', 'item').done(cb);
    }

    /**
     * can only be called post render
     */
    Item.prototype.onPickup = function(cb) {
       $('.item.' + this.item).click(cb);
    }

    Item.prototype.remove = function() {
       $('.item.' + this.item).remove();
    }

    return Item;
});
