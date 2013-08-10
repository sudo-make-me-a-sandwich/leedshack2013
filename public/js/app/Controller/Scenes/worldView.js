/**
 * World View scene controller
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
        var key = new Key();
        key.init('leedsArena');
        key.render(function(html) {
            view.components.push(html);
            cb();
        });
	}
	
	return {
		start: start
	}
});
