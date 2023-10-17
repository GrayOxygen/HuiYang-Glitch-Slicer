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
inlets = 3;
outlets = 1;
//0-switch 1-speed value
var pitchByNote = new Array(0,1);  
var assignSpeed = new Array(0,1);  
var randomSpeed = new Array(0,1);  

function chooseSpeed()
{	  
	// if (inlet == 0) {
	//     pitchByNote[0] = arguments[0];
    // 	pitchByNote[1] = arguments[1];
	// }
	// if (inlet == 1) {
	//     assignSpeed[0] = arguments[0];
    // 	assignSpeed[1] = arguments[1];
	// }
	// if (inlet == 2) {
	//     randomSpeed[0] = arguments[0];
    // 	randomSpeed[1] = arguments[1];
	// }

	// if(pitchByNote[0]==1){
	// 	outlet(0, pitchByNote[1])  
	// 	//post("itchByNote"+pitchByNote)
	// 	return 
	// }
	// if(assignSpeed[0]==1){
	// 	outlet(0, assignSpeed[1]) 
	// 	//post("assignSpeed"+assignSpeed)
	// 	return
	// }
	// if(randomSpeed[0]==1){
	// 	outlet(0, randomSpeed[1]) 
	// 	//post("randomSpeed"+randomSpeed)
	// 	return
	// }
	// outlet(0,1)
} 

 
function bang()
{  
}