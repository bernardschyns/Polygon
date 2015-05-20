
WAF.onAfterInit = function onAfterInit() {// @lock

// Set up some objects on a Raphael drawing surface
$('#container1').height($(window).height());
$('#container1').width($(window).width());

debugger;
var draw = Raphael(0, 0, $(window).width(), $(window).height());
var path = draw.path();
path.attr({
    stroke: 'black',
    'stroke-width': 3,
    fill: '#147EDB'
});
sources.polygon.addNewElement();
sources.polygon.Polygon=path[0].toString();

sources.polygon.Attrs=path.attrs;
sources.polygon.save();
//sources.polygon.sync();

// This function sets the path from the input text
function redraw() {
	debugger;
    path.attr({
        path: $('#text').val()
    });
}




// @region namespaceDeclaration// @startlock
	var text = {};	// @textField
	var container1 = {};	// @container
// @endregion// @endlock

// eventHandlers// @lock

	text.click = function text_click (event)// @startlock
	{// @endlock
		event.stopPropagation();
	};// @lock

	text.dblclick = function text_dblclick (event)// @startlock
	{// @endlock
		event.stopPropagation();
	};// @lock

	text.keyup = function text_keyup (event)// @startlock
	{// @endlock
		redraw();
	};// @lock

	container1.dblclick = function container1_dblclick (event)// @startlock
	{// @endlock
 		 var oldpath = $('#text').val();
  		$('#text').val(oldpath + ' Z');
  		redraw();
	};// @lock

	container1.click = function container1_click (event)// @startlock
	{// @endlock
		  var x = event.pageX;
		  var y = event.pageY;
		  var oldpath = $('#text').val();
		  if (!oldpath.match(/M/) || oldpath.match(/Z/)) {
		      $('#text').val('M ' + x + ' ' + y);
		  }
		  else {
		      $('#text').val(oldpath + ' ' + x + ' ' + y);
		  }
		  redraw();
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("text", "click", text.click, "WAF");
	WAF.addListener("text", "dblclick", text.dblclick, "WAF");
	WAF.addListener("text", "keyup", text.keyup, "WAF");
	WAF.addListener("container1", "dblclick", container1.dblclick, "WAF");
	WAF.addListener("container1", "click", container1.click, "WAF");
// @endregion
};// @endlock
