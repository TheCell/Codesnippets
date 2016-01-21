/**
 * function returns the value of the val param from the URL
 * @param  {String} val url GET Parameter
 * @return {Mixed}     Value from Parameter
 */
function getGetParam(val)
{
	var result = "Not found";
	tmp = [];
	location.search.substr(1).split("&").forEach(function (item)
	{
		tmp = item.split("=");
		if (tmp[0] === val) result = decodeURIComponent(tmp[1]);
	});
	return result;
}