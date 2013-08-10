/**
 * Storage model
 * 
 * Access and Set local storage data
 */

define(function()
{	
	/**
	 * Set data
	 * 
	 * @param string key local storage key
	 * @param string value local storage value
	 * @return void
	 */
	function setData(key, value) {
		localStorage.setItem(key, JSON.stringify(value));
	}
	
	/**
	 * Get data
	 * 
	 * @param string key fetch data using key
	 * @return string
	 */
	function getData(key)
	{
		return JSON.parse(localStorage.getItem(key));
	}
	
	return {
		setData: setData,
		getData: getData
	}
});