/**
 * World View scene controller
 */
define([
'app/View',
'app/Model/KeyChain'
], function (View, KeyChain)
{
    function Key() {
        this.keyChain = KeyChain;
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
	}

    Key.prototype.addKey = function(key) {
        KeyChain.addKey(key);
        this.redraw();
    }

    Key.prototype.render = function(cb) {
        var keys = KeyChain.getKeys();
        this.view.keys = new Array();
        for (i in keys) {
            this.view.keys.push({key: i, description: descriptions[i]});
        }

        this.view.fetch('/templates/Components/keyChain', 'keyChain').done(cb);
    }

    Key.prototype.redraw = function() {
        this.render(function(html) {
            $('.keychain').empty().html(html);
        });
    }

    return Key;
});
