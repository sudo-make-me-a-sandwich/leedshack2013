/**
 * Storage model
 * 
 * Access and Set local storage data
 */

define(['app/Model/Storage'], function(Storage)
{
    var keys = Storage.getData('KeyChainData') || {};

    function isLocked(scene) {
        if (!scene.key) {
            return false;
        }
        console.log('Scene has a key ' + scene.description);
        return !keys[scene.key];
    }

    function hasKey(key) {
        return !!keys[key];
    }

    function addKey(key) {
        keys[key] = true;
        Storage.setData('KeyChainData', keys);
    }

    function getKeys() {
        return keys;
    }

	return {
		isLocked: isLocked,
		hasKey: hasKey,
		getKeys: getKeys,
        addKey: addKey
	}
});
