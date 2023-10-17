// popu.js
//
// simulates the logistic population equation:
// f(x) = rx(1-x)
// 
// input is r.  output is current x.
//
// rld, 5.04
//

// inlets and outlets
inlets = 1;
outlets = 1;
var route = new Array();  
// float -- run the equation once
function reset()
{	  
	if (inlet == 0) {
	    route[0]=0; 
	} 
	bang() 
} 


function chooseRoute()
{	  
	if (inlet == 0) {
	    route[0] = arguments[0];
    	route[1] = arguments[1];
	}  
 	outlet(0, route) 
} 

 
// bang -- post the current population to the max window
function bang()
{ 
 	outlet(0, route) 
}