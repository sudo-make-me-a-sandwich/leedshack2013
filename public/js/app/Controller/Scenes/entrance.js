/**
 * Entrance scene controller
 */
define(['app/Components/Key'], function(Key)
{
	/**
	 * Start this controller
	 * 
	 * @return void
	 */
	function start(view, cb, game)
	{
        this.key = new Key();
        this.key.init('leedsArena');
        this.keyChain = game.keyChain;
        
        if (!this.keyChain.keyChain.hasKey(this.key.key))
        {
            this.key.render(function(html)
            {
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
        this.key.onPickup(function()
        {
            this.key.remove();
            this.keyChain.addKey(this.key.key);
            alert('You have just picked up a shiny gold key');
        }.bind(this));
    }

	return {
		start: start,
        postRender: postRender
	}
});
