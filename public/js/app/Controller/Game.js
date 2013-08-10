/**
 * Main game controller. :-)
 */
define([
    'app/Controller/Base',
    'app/View',
    'app/Model/SceneData',
    'app/Model/KeyChain'
], function(BaseController, View, SceneData, KeyChain)
{
	/**
	 * Start this controller
	 * 
	 * @return void
	 */
	function start()
	{
		this.view = new View();
		var params = window.location.hash.match('game:([a-zA-Z]+)');
		
		if (params && params.length) {
            var sceneName = params[1];
		}
        else {
            var sceneName = 'frontDoor';
        }
		
        console.log('Setting scene to ' + sceneName);
        
	    var sceneData = SceneData.getScene(sceneName);
	    
        if (KeyChain.isLocked(sceneData)) {
            throw new Error('You shouldn\'t be in here this room is locked!');
        }

        document.body.className = sceneData.name;
        
        var _this = this;
        $.each(['north', 'south', 'east', 'west', 'up', 'down'], function()
        {
            if (sceneData[this]) {
                var adjScene = SceneData.getScene(sceneData[this]);
                console.log('Found scene [' + adjScene.description + '] to the ' + this);
                _this.view[this] = {
                    locked: KeyChain.isLocked(adjScene),
                    scene: adjScene
                };
            }
        });

        this.view.scene = sceneData;
		require(['app/Controller/Scenes/' + sceneData.name], function(scene) {
			if (scene.start) {
                scene.start(_this.view, function() {
                    _this.view.render($('#controller'), '/templates/Game', 'game', {method: 'html'}).done(function() {
                        postRender();
                        if (scene.postRender) {
                            scene.postRender();
                        }
                    });
                });
            }
            else {
                _this.view.render($('#controller'), '/templates/Game', 'game', {method: 'html'}).done(postRender);
            }
		});
	}
	
	/**
	 * Perform actions after the scene is rendered
	 * 
	 * @return void
	 */
	function postRender()
	{
		console.log("post render");
		
		//centre align things vertically & horizontally
		$(".center-align").each(function()
        {
			console.log("align center");
			$(this).css({
				"margin-left": "-" + $(this).outerWidth() / 2 + "px",
				"margin-top": "-" + $(this).outerHeight() / 2 + "px",
				"position": "absolute",
				"left": "50%",
				"top": "50%"
			});
        });
	}
	
	return {
		init: BaseController.init,
		start: start
	}
});
