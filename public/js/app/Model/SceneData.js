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
            'down': 'lifeOnEarthSouth',
            'name': 'entrance',
            'title': 'Entrance',
            'description': "You're standing in the grand entrance hall of the Leeds City Museum. " +
            	"Ahead of you a flight of stairs that leads both up and down. " +
            	"There are doors leading off in all directions but they strangely appear to be locked."
        },
        'leedsArena' : {
            'south': 'entrance',
            'key': 'leedsArena',
            'name': 'leedsArena',
            'title': 'The Leeds Arena',
            'description': 'The Leeds Arena'
        },
        'collectorsCabinet' : {
            'west': 'entrance',
            'name': 'collectorsCabinet',
            'title': 'The Collectors Cabinet',
            'description': 'The Collectors Cabinet',
            'exhibits': [{
                'description': 'This is a thing-a-mi-bob',
                'top': 100,
                'left': 10,
                'height': 30,
                'width': 30,
            }]
        },
        'worldView' : {
            'east': 'entrance',
            'name': 'worldView',
            'title': 'World View',
            'description': "Numerous cambinets containing exhibits from Africa and Asia surround the centre of the room. " +
            	"A loud violent banging noise eminates from a large wooden box in the corner."
        },
        'lifeOnEarthSouth' : {
            'up': 'entrance',
            'north': 'lifeOnEarthNorth',
            'west': 'lifeOnEarthWest',
            'east': 'lifeOnEarthEast',
            'name': 'lifeOnEarthSouth',
            'title': 'Life On Earth South',
            'description': '',
            'exhibits': [{
                'description':  'A blue fin tuna, larger than any tuna you are likley o find today. If you\'re eating tuna at home today, you\'ll be eating the smaller yellow fin',
                'top': 470,
                'left': 0,
                'height': 100,
                'width': 150,
            },
            {
                'description':'This is an Irish Elk, which is neither irish nor an elk',
                'top': 0,
                'left': 150,
                'height': 600,
                'width': 700,
            }]
        },
        'lifeOnEarthWest' : {
            'up': 'entrance',
            'north': 'lifeOnEarthNorth',
            'south': 'lifeOnEarthSouth',
            'east': 'lifeOnEarthEast',
            'name': 'lifeOnEarthWest',
            'title': 'Life On Earth West',
            'description': ''
        },
        'lifeOnEarthNorth' : {
            'up': 'entrance',
            'south': 'lifeOnEarthSouth',
            'west': 'lifeOnEarthWest',
            'east': 'lifeOnEarthEast',
            'name': 'lifeOnEarthNorth',
            'title': 'Life On Earth North',
            'description': '',
        },
        'lifeOnEarthEast' : {
            'up': 'entrance',
            'north': 'lifeOnEarthNorth',
            'south': 'lifeOnEarthSouth',
            'west': 'lifeOnEarthWest',
            'name': 'lifeOnEarthEast',
            'title': 'Life On Earth East',
            'description': ''
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
