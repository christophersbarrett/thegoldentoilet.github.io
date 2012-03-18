/**
* Chris Barrett 1/22/2012
 * creates slight header animation when scrolled to the correct section, or link is clicked
 **/

function scrollListen(domClass, on, dom) {
	//need to get top of work div position, then when scroll hits that position wipe in the work menu bar

	var workDiv = dom.byId("work"),
		workTop = workDiv.offsetTop;
	on(window, "scroll",function(){
		if(window.scrollY > (workTop-50) && window.scrollY < 690){
			//add work-nav-floating class if not already on there
			//685 bottom limit
			if(!domClass.contains("work-nav-float", "work-nav-floating")){
				domClass.add("work-nav-float", "work-nav-floating");
			}
		} else {
				//remove class
				domClass.remove("work-nav-float", "work-nav-floating");
		}
	});
}