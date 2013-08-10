/**
 * Storage model
 * 
 * Access and Set local storage data
 */

define(function()
{	
	return {
		getData:
            {
                '0': {
                    'frontDoor' {
                        'north': 'entrance',
                        'background': '/images/scenes/frontDoor/background.png'
                    },
                    'entrance' : {
                        'south': 'frontDoor',
                        'background': '/images/scenes/entrace/background.png'
                    }
                }
            }
	}
});
