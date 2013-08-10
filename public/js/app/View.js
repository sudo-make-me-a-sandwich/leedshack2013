/**
 * View object handles template rendering, etc
 */

define(['mustache', 'jquery.mustache'], function(Mustache)
{
	function View()
	{
		window.Mustache = Mustache;
		
		/**
		 * Returns the rendered content of a template
		 * 
		 * @return Deferred
		 */
		this.fetch = function(templatePath, templateId)
		{
			var deferred = $.Deferred();
			var _this	 = this;
			
			$.Mustache.load(templatePath).done(function() {
				deferred.resolve($.Mustache.render(templateId, _this));
			});
			
			return deferred;
		}
		
		/**
		 * Render a template
		 * 
		 * @param object renderIntoElement
		 * @param string templatePath
		 * @param string templateId
		 * @param object options
		 * @return void
		 */
		this.render = function(renderIntoElement, templatePath, templateId, options)
		{
			var deferred = $.Deferred();
			var _this	 = this;
			
			$.Mustache.load(templatePath).done(function() {
				deferred.resolve(renderIntoElement.mustache(templateId, _this, options));
			});
			
			return deferred;
		}
	}
	
	return View;
});
