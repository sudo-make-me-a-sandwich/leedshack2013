/**
 * World View scene controller
 */
define([
'app/View'
], function (View)
{
    function Key() {
    }

	/**
	 * initialise this controller
	 * 
	 * @return void
	 */
	Key.prototype.init = function(key)
	{
       this.view = new View();

	}

    Key.prototype.render = function(cb) {
        this.view.fetch('/templates/Components/key', 'key').done(cb);
    }

    return Key;
});
