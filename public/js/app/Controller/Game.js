/**
 * Choose sport controller. :-)
 */
define(['app/Controller/Base', 'app/View', 'app/Model/SceneData'], function(BaseController, View, SceneData)
{
	/**
	 * Start this controller
	 * 
	 * @return void
	 */
	function start()
	{
		var params = window.location.hash.match('game:([a-zA-Z]+)/');
		
		if (params && params.length) {
            var sceneName = params[1];
		}
        else {
            var sceneName = 'frontDoor';
        }
	    var sceneData = SceneData.getScene(sceneName);

        document.body.className = sceneName;

        View.scene = sceneData;
		View.render($('#controller'), '/templates/Game', 'game', {method: 'html'});
	}
	
	return {
		start: start
	}
});
