/**
 * Entrance scene controller
 */
define([
'app/Model/KeyChain',
'app/Components/Key'
], function(KeyChain, Key)
{
	/**
	 * Start this controller
	 * 
	 * @return void
	 */
	function start(view, cb)
	{
        this.key = new Key();
        this.key.init('leedsArena');
        
        if (!KeyChain.hasKey(this.key.key)) {
            this.key.render(function(html) {
                view.components.push(html);
                cb();
            });
        }
        else {
            cb();
        }
	}
	
    function postRender()
    {
        this.key.onPickup(function() {
            this.key.remove();
            KeyChain.addKey(this.key.key);
            alert('You have just picked up a shiny gold key');
        }.bind(this));
    }

	return {
		start: start,
        postRender: postRender
	}
});
