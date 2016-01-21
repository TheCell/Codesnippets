/**
 * This function calculates the greatest common divisor
 * usefull if you wanna find out the aspect ratio (integer)
 * example 1920x1080
 * gcd (1920,1080) gives 120
 * now you divide 1920 / 120 = 16 and divide 1080 / 120 = 9
 * so the ratio is 16:9
 * @param  {integer} a number1
 * @param  {integer} b number2
 * @return {integer}   greatest common divisor
 */
function gcd (a, b)
{
	return (b == 0) ? a : gcd (b, a%b);
}