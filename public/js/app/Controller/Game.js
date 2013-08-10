/**
 * Main game controller. :-)
 */
define([
    'app/Controller/Base',
    'app/View',
    'app/Model/SceneData',
    'app/Model/KeyChain',
    'app/Model/Storage',
    'app/Components/KeyChain',
    'app/Components/Inventory'

], function(BaseController, View, SceneData, KeyChain, Storage, KeyChainComponent, Inventory)
{
	/**
	 * Start this controller
	 * 
	 * @return void
	 */
	function start()
	{
        this.previousScene = Storage.getData('previousScene');
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
            sceneData = {
                name: 'locked',
                title: sceneData.title,
                description: 'This room is locked! You need to find the key to enter!',
                south: this.previousScene.name 
            };
        }

        document.body.className = sceneData.name;
        
        var _this = this;
        $.each(['north', 'south', 'east', 'west', 'up', 'down'], function()
        {
            if (sceneData[this])
            {
                var adjScene = SceneData.getScene(sceneData[this]);
                console.log('Found scene [' + adjScene.title + '] to the ' + this);
                
                _this.view[this] =
                {
                    locked: KeyChain.isLocked(adjScene),
                    scene: adjScene
                };
            }
        });
        
        addSubComponents.call(this);
        
        this.view.scene = sceneData;
		require(['app/Controller/Scenes/' + sceneData.name], function(scene)
		{
			if (scene && scene.start)
			{
                scene.start(_this.view, function()
                {
                    _this.view.render($('#controller'), '/templates/Game', 'game', {method: 'html'}).done(function()
                    {
                        postRender();
                        
                        if (scene.postRender) {
                            scene.postRender();
                        }
                    });
                }, _this);
            }
            else {
                _this.view.render($('#controller'), '/templates/Game', 'game', {method: 'html'}).done(postRender);
            }
		});
        Storage.setData('previousScene', sceneData);
	}
	
    function addSubComponents()
    {
        this.keyChain = new KeyChainComponent();
        this.keyChain.init();
        this.keyChain.render(function(html){
            this.view.components.push(html);
        }.bind(this));
        
        this.inventory = new Inventory();
        this.inventory.init();
        this.inventory.render(function(html){
            this.view.components.push(html);
        }.bind(this));
    }

	/**
	 * Perform actions after the scene is rendered
	 * 
	 * @return void
	 */
	function postRender()
	{
		//centre align things vertically & horizontally
		$(".center-align").each(function()
        {
			$(this).css({
				"margin-left": "-" + $(this).outerWidth() / 2 + "px",
				"margin-top": "-" + $(this).outerHeight() / 2 + "px",
				"position": "absolute",
				"left": "50%",
				"top": "50%"
			});
        });
		
		// Bottom align
		$(".bottom-align").each(function()
        {
			$(this).css({
				"margin-left": "-" + $(this).outerWidth() / 2 + "px",
				"margin-top": "-" + $(this).outerHeight() / 2 + "px",
				"position": "absolute",
				"left": "50%",
				"bottom": "150px"
			});
        });
		
		//align tooltips
		$(".ui-button-north .tooltip").each(function()
        {
			$(this).css({
				"margin-left": "-" + $(this).outerWidth() / 2 + "px",
				"position": "absolute",
				"left": "50%",
				"top": "100%"
			});
        });
		
		$(".ui-button-east .tooltip").each(function()
        {
			$(this).css({
				"margin-top": "-" + $(this).outerHeight() / 2 + "px",
				"position": "absolute",
				"right": "100%",
				"top": "50%"
			});
        });
		
		$(".ui-button-south .tooltip").each(function()
        {
			$(this).css({
				"margin-left": "-" + $(this).outerWidth() / 2 + "px",
				"position": "absolute",
				"left": "50%",
				"bottom": "100%"
			});
        });
		
		$(".ui-button-west .tooltip").each(function()
        {
			$(this).css({
				"margin-top": "-" + $(this).outerHeight() / 2 + "px",
				"position": "absolute",
				"left": "100%",
				"top": "50%"
			});
        });
	}
	
	return {
		init: BaseController.init,
		start: start
	}
});
