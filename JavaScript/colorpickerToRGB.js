/*
you need a html element like this:
<input type="color" onchange="updateColor(this)">
 */

// this returns the hex color from the input as rgb() string
function updateColor(ele)
{
	return 'rgb(' + parseInt(ele.value.slice(-6, -4), 16) + ',' + parseInt(ele.value.slice(-4, -2), 16) + ',' + parseInt(ele.value.slice(-2), 16) + ')';
}