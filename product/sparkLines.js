var margin = {top: 20, right: 20, bottom: 30, left: 50},
widthTwo = 265 - margin.left - margin.right,
heightTwo = 200 - margin.top - margin.bottom;

var parseDate = d3.time.format("%d-%b-%y").parse;

var xTwo = d3.time.scale()
.range([0, widthTwo]);

var yTwo = d3.scale.linear()
.range([heightTwo, 0]);

var line = d3.svg.line()
	.x(function(d) { return xTwo(d.date); })
	.y(function(d) { return yTwo(d.close); });

var svgTwo = d3.select(document.getElementById("sparkOne")).append("svg")
	.attr("width", widthTwo + margin.left + margin.right)
	.attr("height", heightTwo + margin.top + margin.bottom)
	.append("g")
	.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

d3.tsv("dataSpark.tsv", function(error, data) {
	data.forEach(function(d) {
	d.date = parseDate(d.date);
	d.close = +d.close;
});

xTwo.domain(d3.extent(data, function(d) { return d.date; }));
yTwo.domain(d3.extent(data, function(d) { return d.close; }));

svgTwo.append("path")
	.datum(data)
	.attr("class", "line")
	.attr("d", line);
});