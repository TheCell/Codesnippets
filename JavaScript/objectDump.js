/**
 * function that outputs the content of a Object
 * @param  {Object} obj javascript object
 * @return {void}     calls alert
 */
function objectDump(obj)
{
	var out = '';
	for (var i in obj)
	{
		out += i + ": " + obj[i] + "\n";
	}

	alert(out);
}