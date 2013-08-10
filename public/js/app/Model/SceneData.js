/**
 * Storage model
 * 
 * Access and Set local storage data
 */

define(function()
{	
    var data = {
        'frontDoor' {
            'north': 'entrance',
            'background': '/images/scenes/frontDoor/background.png'
        },
        'entrance' : {
            'south': 'frontDoor',
            'background': '/images/scenes/entrace/background.png'
        }
    };

    function getScene (sceneName) {
        if (!data[sceneName]) {
            throw new Error('Scene: [' + sceneName + '] Not found');
        }
        return data[sceneName];
    }


	return {
		getScene: getScene;
	}
});
