/**
 * Storage model
 * 
 * Access and Set local storage data
 */

define(function()
{	
    var data = {
        'frontDoor': {
            'north': 'entrance',
            'name': 'frontDoor',
            'description': 'Outside'
        },
        'entrance' : {
            'south': 'frontDoor',
            'north': 'mainHall',
            'name': 'entrance',
            'description': 'Entrance'
        },
        'mainHall' : {
            'south': 'entrance',
            'name': 'mainHall',
            'description': 'Main Hall'
        }
    };

    function getScene (sceneName) {
        if (!data[sceneName]) {
            throw new Error('Scene: [' + sceneName + '] Not found');
        }
        return data[sceneName];
    }


	return {
		getScene: getScene
	}
});
