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
       this.view.key = key;
       this.key = key;

	}

    Key.prototype.render = function(cb) {
        this.view.fetch('/templates/Components/key', 'key').done(cb);
    }

    /**
     * can only be called post render
     */
    Key.prototype.onPickup = function(cb) {
       $('.key.' + this.key).click(cb);
    }

    Key.prototype.remove = function() {
       $('.key.' + this.key).remove();
    }

    return Key;
});
