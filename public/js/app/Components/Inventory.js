/**
 * Inventory component
 */
define(['app/View', 'app/Model/Inventory'], function (View, InventoryModel)
{
    function Inventory()
    {
        this.inventory = InventoryModel;
    }
    
    var descriptions = {
        'leaves': 'Some delicious leaves of doom. No, not of doom - really they are delightful, and not doomy at all.',
    };
    
	/**
	 * initialise this controller
	 * 
	 * @return void
	 */
    Inventory.prototype.init = function()
	{
        this.view = new View();
	}

    Inventory.prototype.addItem = function(item)
    {
    	InventoryModel.addItem(item);
        this.redraw();
    }

    Inventory.prototype.render = function(cb)
    {
        var items = InventoryModel.getInventory();
        this.view.inventory = new Array();
        
        for (i in items) {
            this.view.inventory.push({item: i, description: descriptions[i]});
        }

        this.view.fetch('/templates/Components/inventory', 'inventory').done(cb);
    }

    Inventory.prototype.redraw = function()
    {
        this.render(function(html) {
            $('.inventory').empty().html(html);
        });
    }

    return Inventory;
});
