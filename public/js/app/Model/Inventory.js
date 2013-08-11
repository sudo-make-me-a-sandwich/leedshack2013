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
    
    function removeItem(item)
    {
    	inventory[item] = false;
    	Storage.setData('InventoryData', inventory);
    }
    
    function getInventory()
    {
        return inventory;
    }
    
    function hasItem(item)
    {
        return !!inventory[item];
    }
    
	return {
		addItem: addItem,
		removeItem: removeItem,
		getInventory: getInventory,
		hasItem: hasItem
	}
});
