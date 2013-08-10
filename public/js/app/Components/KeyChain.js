/**
 * World View scene controller
 */
define([
'app/View',
'app/Model/KeyChain'
], function (View, KeyChain)
{
    function Key() {
    }

    var descriptions = {
        'leedsArena': 'A Shiny Gold Key',
    };

	/**
	 * initialise this controller
	 * 
	 * @return void
	 */
	Key.prototype.init = function()
	{
        this.view = new View();
        this.view.keys = new Array();
        var keys = KeyChain.getKeys();
        console.log(keys);
        for (i in keys) {
            this.view.keys.push({key: i, description: descriptions[i]});
        }
	}

    Key.prototype.render = function(cb) {
        this.view.fetch('/templates/Components/keyChain', 'keyChain').done(cb);
    }

    return Key;
});
