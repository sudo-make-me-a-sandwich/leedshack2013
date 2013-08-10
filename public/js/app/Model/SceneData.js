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
            'north': 'leedsArena',
            'east': 'collectorsCabinet',
            'west': 'worldView',
            'name': 'entrance',
            'description': 'Entrance'
        },
        'leedsArena' : {
            'south': 'entrance',
            'up': 'landing1',
            'name': 'leedsArena',
            'description': 'The Leeds Arena'
        },
        'collectorsCabinet' : {
            'west': 'entrance',
            'name': 'collectorsCabinet',
            'description': 'The Collectors Cabinet'
        },
        'worldView' : {
            'east': 'entrance',
            'name': 'worldView',
            'description': 'world view'
        },
        'landing1' : {
            'down': 'entrance',
            'name': 'landing1',
            'description': 'First Floor Landing'
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
