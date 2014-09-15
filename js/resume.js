var chart = null;
var currentJob = "10";

function clickListen(domClass, on, dom, Chart, theme, Tooltip, query, Default)
{
	on(dom.byId("atimeline"), "click", function(){
		domClass.toggle(dom.byId("timeline"), "hide");
		domClass.toggle(currentDiv, "hide");
		if(chart === null) {
			makeChart(Chart, theme, Tooltip, Default, domClass);
		}
		currentDiv = dom.byId("timeline");
	});

	on(dom.byId("aportfolio"), "click", function(){
		domClass.toggle(dom.byId("portfolio"), "hide");
		domClass.toggle(currentDiv, "hide");
		currentDiv = dom.byId("portfolio");
	});

	on(dom.byId("acode"), "click", function(){
		domClass.toggle(dom.byId("code"), "hide");
		domClass.toggle(currentDiv, "hide");
		currentDiv = dom.byId("code");
	});

	on(dom.byId("atechnologies"), "click", function(){
		domClass.toggle(dom.byId("technologies"), "hide");
		domClass.toggle(currentDiv, "hide");
		currentDiv = dom.byId("technologies");
	});

	on(dom.byId("awork"), "click", function(){
		if(currentDiv != dom.byId("workPane")){
			domClass.toggle(dom.byId("workPane"), "hide");
			domClass.toggle(currentDiv, "hide");
			currentDiv = dom.byId("workPane");
		}
	});

	query(".resumeButton > *").on("click", function(e){
		domClass.toggle(currentCode, "hide");
		currentCode = dom.byId(e.target.title);
		domClass.toggle(currentCode, "hide");
	});
}

makeTooltip = function(o) {
	var text;

	switch (o.x) {
	case 1:
		text = "Runzheimer, Intl - Intern";
		break;
	case 1.8:
		text = "Web Developer - WRCHD";
		break;
	case 2.5:
		text = "Web Developer - Earthly Elements";
		break;
	case 4.1:
		text = "Systems Specialist - Northwestern Mutual";
		break;
	case 5:
		text = "Java Engineer - dChron, Inc.";
		break;
	case 6.7:
		text = "Web Developer - UHS UW-Madison";
		break;
	case 9:
		text = "Academic Technology Developer - Learning Solutions UW-Madison";
		break;
	case 10:
		text = "Software Engineer - Sitepen, inc.";
		break;
	case 11:
		text = "JavaScript Engineer - Toura LLC.";
		break;
	case 12:
		test = "JavaScript Engineer/Team Lead - Flexion, Inc."
		break;
	default:
		text = "hmmm some shit missin right hur";
		break;
	}
	return text;
};

makeChart =  function(Chart, theme, Tooltip, Default, domClass) {
	 chart = new Chart("jobTimeline",{fill:null}).setTheme(theme).
				addAxis("x", {
					 includeZero: true, fontColor:"black",
					labels: [{value: 0, text: "2002"},
						{value: 1, text: "2003"}, {value: 2, text: "2004"},
						{value: 3, text: "2005"}, {value: 4, text: "2006"},
						{value: 5, text: "2007"}, {value: 6, text: "2008"},
						{value: 7, text: "2009"}, {value: 8, text: "2010"},
						{value: 9, text: "2011"}, {value: 10, text: "2012"},
						{value: 11, text: "2013"}, {value: 12, text: "2014"})
					],
					rotation: 45
				}).
				addAxis("y", {
					vertical: true,  natural: true, labels: [{value:1, text: " "}]

				}).
				addPlot("default", {type: "Bars"}).
				addSeries("Series A", [1]).
				addSeries("Series B", [1.8]).
				addSeries("Series C", [2.5]).
				addSeries("Series D", [4.1]).
				addSeries("Series E", [5]).
				addSeries("Series F", [6.7]).
				addSeries("Series G", [9]).
			    addSeries("Series H", [10]).
			    addSeries("Series I", [11]).
			    addSeries("Seires J", [12]));

				var anim4b = new Tooltip(chart, "default", {text: makeTooltip});

				chart.render();

				chart.connectToPlot("default",function(evt) {
					var shape = evt.shape, type = evt.type;
					if(type == "onmouseover") {
						if(!shape.originalFill) {
							shape.originalFill = shape.fillStyle;
						}
						shape.setFill("lightblue");
					}
					else if(type == "onmouseout") {
						shape.setFill(shape.originalFill);
					}
					else if(type == "onclick"){
						 x = evt.x;
						changeJob(x.toString(), domClass);
					 }
				});
};

changeJob = function(divJob, domClass) {

	console.log("currentJob: ", currentJob);
	console.log("divJob: ", divJob);
	domClass.toggle(currentJob, "hide");
    domClass.toggle(divJob, "hide");
    currentJob = divJob;
};
