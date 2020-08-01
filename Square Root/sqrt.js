// Following Babylonian Method for Square Root

/*

This method can be derived from (but predates) Newton–Raphson method.


	1 Start with an arbitrary positive start value x (the closer to the 
   	  root, the better).
	2 Initialize y = 1.
	3. Do following until desired approximation is achieved.
  		a) Get the next approximation for root using average of x and y
  		b) Set y = n/x

*/
var mySqrt = function(x) {
    let res = x;
    let y = 1;
    let e = 0.000001
    while((res - y) > e) {
        res = (res + y)/2;
        y = x/res;
    }
    return Math.floor(res);
};