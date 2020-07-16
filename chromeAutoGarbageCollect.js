/**
 * This script just runs Chrome's garbage collector periodically.
 * (every wait_ms milliseconds (where wait_ms > 60000), to be exact).
 * 
 * Made because there's some sort of memory leak in one script/gadget or another
 * and I can't be bothered to figure out which.
 * 
 * The relevant Chrome flag must be enabled for this to work.
 * 
 * @copyright Copyright 2020 Michael Daniels (Wikipedia User:Mdaniels5757)
 * @license Apache-2.0
 */ 

var wait_ms = 61000;

function runGC() {
	var now = new Date();
	
	setTimeout( function () {
		runGC();
	}, wait_ms - (now.getUTCSeconds()*1000 + now.getUTCMilliseconds() ) );
	
	window.gc();
}

runGC();
