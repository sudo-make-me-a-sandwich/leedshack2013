/**
 * Storage model
 * 
 * Access and Set local storage data
 */

define(function()
{
    var keys = {};

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
    }

	return {
		isLocked: isLocked,
		hasKey: hasKey,
        addKey: addKey
	}
});
