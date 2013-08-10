/**
 * Main game controller. :-)
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

        document.body.className = sceneData.name;
        
        var _this = this;
        $.each(['north', 'south', 'east', 'west', 'up', 'down'], function()
        {
            if (sceneData[this]) {
                console.log('Found scene to the ' + this);
                _this.view[this] = SceneData.getScene(sceneData[this]);
            }
        });

        this.view.scene = sceneData;
		this.view.render($('#controller'), '/templates/Game', 'game', {method: 'html'}).done(postRender);
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
