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
            'title': 'Outside',
            'description': 'Outside'
        },
        'entrance' : {
            'south': 'frontDoor',
            'north': 'leedsArena',
            'east': 'collectorsCabinet',
            'west': 'worldView',
            'name': 'entrance',
            'title': 'Entrance',
            'description': "You're standing in the grand entrance hall of the Leeds City Museum. " +
            	"Ahead of you a flight of stairs that leads both up and down. " +
            	"There are doors leading off in all directions but they strangely appear to be locked."
        },
        'leedsArena' : {
            'south': 'entrance',
            'up': 'landing1',
            'key': 'leedsArena',
            'name': 'leedsArena',
            'title': 'The Leeds Arena',
            'description': 'The Leeds Arena'
        },
        'collectorsCabinet' : {
            'west': 'entrance',
            'name': 'collectorsCabinet',
            'title': 'The Collectors Cabinet',
            'description': 'The Collectors Cabinet'
        },
        'worldView' : {
            'east': 'entrance',
            'name': 'worldView',
            'title': 'World View',
            'description': "Numerous cambinets containing exhibits from Africa and Asia surround the centre of the room. " +
            	"A loud violent banging noise eminates from a large wooden box in the corner."
        },
        'landing1' : {
            'down': 'entrance',
            'name': 'landing1',
            'title': 'First Floor Landing',
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
