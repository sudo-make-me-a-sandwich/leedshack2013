/**
 * The app router dispatches to a controller based on a URI path
 */

define(['app/Model/Storage'], function(Storage)
{
	/**
	 * All the available routes
	 * 
	 * @var array
	 */
	var routes = [
		{hash: 'game', controller: 'Game'},
	];
	
	/**
	 * And the default controller is...
	 * 
	 * @var string
	 */
	var defaultController = 'Title';
	
	/**
	 * Route a request
	 * 
	 * @return void
	 */
	function route()
	{
		// Observe the hash change event for future changes
		$(window).bind('hashchange', hashchange);
		
		// And call it once now
		hashchange();
	}
	
	/**
	 * Handle a change in URL hash (instantiate a controller)
	 * 
	 * @return void
	 */
	function hashchange()
	{
		this.path = window.location.hash.substring(1);
		console.log('Routing for path: ' + this.path);
		
		/**
		 * An array of path components
		 * 
		 * @var array
		 */
		var pathComponents = this.path.split('/');
		
		/**
		 * The selected controller (will be started at the end)
		 * 
		 * @var string
		 */
		var selectedController = defaultController;
		
		/**
		 * Holds any controller options to pass through to start
		 * 
		 * @var string
		 */
		var controllerOptions;
		
		/**
		 * Now loop over the path components
		 */
		$.each(pathComponents, function(i)
		{
			// Separate out the parts of this component
			var components = pathComponents[i].split(':');
			var controller = components[0];
			var options	   = components[1];
			
			// Now let's work out which controller we should use
			$.each(routes, function(j)
			{
				if (controller == routes[j].hash)
				{
					selectedController = routes[j].controller;
					controllerOptions  = options;
				}
			});
		});
		
		// And load the selected controller
		loadController(selectedController, controllerOptions);
	}
	
	/**
	 * Load a controller by name
	 * 
	 * @param string controllerName
	 * @param string controllerOptions
	 * @return void
	 */
	function loadController(controllerName, controllerOptions)
	{
		if (controllerName)
		{
			/**
			 * Start the given controller
			 */
			require(['app/Controller/' + controllerName], function(controller) {
				controller.start(controllerOptions);
			});
		}
	}
	
	return {
		route: route
	}
});
