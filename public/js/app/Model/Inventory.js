/**
 * Inventory model
 */

define(['app/Model/Storage'], function(Storage)
{
    var inventory = Storage.getData('InventoryData') || {};
    
    function addItem(item)
    {
    	inventory[item] = true;
        Storage.setData('InventoryData', inventory);
    }
    
    function getInventory()
    {
        return inventory;
    }
    
	return {
		addItem: addItem,
		getInventory: getInventory
	}
});
