/**
 * Scene data model
 * 
 * Contains the bulk of the game content.
 */

define(function()
{	
    var data = {
        'frontDoor': {
            'north': 'entrance',
            'name': 'frontDoor',
            'title': 'Outside',
            'description': 'The new Leeds City Museum has been eighty years in the making ' +
            	'but its story goes back more than two centuries.',
            'exhibits': [{
                'description': 'The building which currently houses Leeds Museum was built between 1865 and 1868 ' +
                	'and has served various purposes, including a long stint as a theatre. ' +
                	'Transformation of the building into the Leeds City Museum started in 2005.',
                'top': 100,
                'left': 350,
                'height': 100,
                'width': 324,
                'image': 'ui/qm.png'
            }]
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
            'description': "Numerous cambinets containing exhibits from Africa line the walls of the room. " +
            	"A loud violent banging noise eminates from an ancient clay pot at the far end.",
            'exhibits': [{
                'description': 'The elephant must have been enormous and quite old. Ivory was worth a great deal to both European and Asian carvers of precious ornaments. Merchants could grow rich by sourcing and controlling the trade.',
                'top': 540,
                'left': 700,
                'height': 50,
                'width': 100,
                'image': 'ui/qm-small.png',
                'tooltip': 'top left'
            }]
        },
        'lifeOnEarthSouth' : {
            'up': 'entrance',
            //'north': 'lifeOnEarthNorth',
            'west': 'lifeOnEarthWest',
            'east': 'lifeOnEarthEast',
            'name': 'lifeOnEarthSouth',
            'title': 'Life On Earth South',
            'description': "You're standing a large circular room west of a white house. In front of you a ginormous Elk skeleton " +
            	"dominates your view.",
            'exhibits': [{
                'description':  'A blue fin tuna, larger than any tuna you are likley o find today. ' +
                	'If you\'re eating tuna at home today, you\'ll be eating the smaller yellow fin',
                'top': 470,
                'left': 0,
                'height': 100,
                'width': 150,
            },
            {
                'description':'The Irish Elk is misleadingly named, as the creature was not an elk ' +
                	'but a giant dear, found in many other countries besides Ireland more than 10,000 years ago. ' +
                	'Nor were its bones actually black: Victorian collectors stained them to add an authentic peat-bog look.',
                'top': 0,
                'left': 150,
                'height': 550,
                'width': 700,
            }]
        },
        'lifeOnEarthWest' : {
            'up': 'entrance',
            //'north': 'lifeOnEarthNorth',
            'south': 'lifeOnEarthSouth',
            'east': 'lifeOnEarthEast',
            'name': 'lifeOnEarthWest',
            'title': 'Life On Earth West',
            'description': '',
            'exhibits': [{
                'description': 'Polar bears actually have black skins and colourless hair - but those thick, hollow hairs reflect light to give its white-looking coat',
                'top': 418,
                'left': 238,
                'height': 60,
                'width': 60,
                'image': 'ui/qm.png'
            },
            {
                'description': 'Blue fin Tuna, the largest length reported is 180inches (458cm) and the maximum weight reported is 1,506lbs (684kg). They can swim at speeds up to 45mph (72.5kph)',
                'top': 59,
                'left': 268,
                'height': 60,
                'width': 60,
                'image': 'ui/qm.png'
            }]
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
            //'north': 'lifeOnEarthNorth',
            'south': 'lifeOnEarthSouth',
            'west': 'lifeOnEarthWest',
            'name': 'lifeOnEarthEast',
            'title': 'Life On Earth East',
            'description': "Aaarrgh! A scary sight indeed.",
            'exhibits': [{
                'description': "This Bengal tiger has an interesting history. Shot nearly 150 years ago, " +
                	"he looks slightly stretched because he spent many years flattened out as a rug before put " +
                	"back into a tiger shape.",
                'top': 210,
                'left': 550,
                'height': 75,
                'width': 100,
                'tooltip': 'top left',
            	'image': 'ui/qm-small.png'
            }]
        }
    };

    function getScene (sceneName)
    {
        if (!data[sceneName]) {
            throw new Error('Scene: [' + sceneName + '] Not found');
        }
        return data[sceneName];
    }

	return {
		getScene: getScene
	}
});
