
	function displayGraphExample(id, width, height, interpolation, animate, updateDelay, transitionDelay) {
		// create an SVG element inside the #graph div that fills 100% of the div
		var graph = d3.select(id).append("svg:svg").attr("width", "100%").attr("height", "100%");

		// create a simple data array that we'll plot with a line (this array represents only the Y values, X will just be the index location)
		//var data = [3, 6, 2, 7, 5, 2, 1, 3, 8, 9, 2, 5, 9, 3, 6, 3, 6, 2, 7, 5, 2, 1, 3, 8, 9, 2, 5, 9, 2, 7, 5, 2, 1, 3, 8, 9, 2, 5, 9, 3, 6, 2, 7, 5, 2, 1, 3, 8, 9, 2, 9];

		var parseDate = d3.time.format("%d-%b-%y").parse;

		var x = d3.time.scale()
			.range([0, width]);

		var y = d3.scale.linear()
			.range([height, 0]);

		var area = d3.svg.area()
			.x(function(d) { 
				return x(d.date); 
			})
			.y0(height)
			.y1(function(d) { 
				return y(d.close); 
			});

		d3.csv("data/yelpSharePrices.csv", function(error, data) {
			var xAxis = d3.svg.axis()
				.scale(x)
				.orient("bottom");

			var yAxis = d3.svg.axis()
				.scale(y)
				.orient("left");

			data.forEach(function(d) {
				d.date = parseDate(d.date);
				d.close = +d.close;
			});
			graph.append("svg:path").attr("d", area(data));

			x.domain(d3.extent(data, function(d) { return d.date; }));
			y.domain([0, d3.max(data, function(d) { return d.close; })]);
			
			graph.append("path")
				.datum(data)
				.attr("class", "area")
				.attr("d", area);

			graph.append("g")
				.attr("class", "x axis")
				.attr("transform", "translate(0," + height + ")")
				.call(xAxis);

			graph.append("g")
				.attr("class", "y axis")
				.call(yAxis)
				.append("text")
				.attr("transform", "rotate(-90)")
				.attr("y", 6)
				.attr("dy", ".71em")
				.style("text-anchor", "end")
				.text("Price ($)");
		});

		/*
		// create a line object that represents the SVN line we're creating
		var line = d3.svg.line()
			// assign the X function to plot our line as we wish
			.x(function(d,i) { 
				// verbose logging to show what's actually being done
				//console.log('Plotting X value for data point: ' + d + ' using index: ' + i + ' to be at: ' + x(i) + ' using our xScale.');
				// return the X coordinate where we want to plot this datapoint
				return x(i); 
			})
			.y(function(d) { 
				// verbose logging to show what's actually being done
				//console.log('Plotting Y value for data point: ' + d + ' to be at: ' + y(d) + " using our yScale.");
				// return the Y coordinate where we want to plot this datapoint
				return y(d); 
			})
			.interpolate(interpolation)
		*/
	
		// display the line by appending an svg:path element with the data line we created above
		//graph.append("svg:path").attr("d", area(data));
		// or it can be done like this
		//graph.selectAll("path").data([data]).enter().append("svg:path").attr("d", line);
		
		/*
		function redrawWithAnimation() {
			// update with animation
			graph.selectAll("path")
				.data([data]) // set the new data
				.attr("transform", "translate(" + x(1) + ")") // set the transform to the right by x(1) pixels (6 for the scale we've set) to hide the new value
				.attr("d", line) // apply the new data values ... but the new value is hidden at this point off the right of the canvas
				.transition() // start a transition to bring the new value into view
				.ease("linear")
				.duration(transitionDelay) // for this demo we want a continual slide so set this to the same as the setInterval amount below
				.attr("transform", "translate(" + x(0) + ")"); // animate a slide to the left back to x(0) pixels to reveal the new value
				
				//thanks to 'barrym' for examples of transform: https://gist.github.com/1137131
		}
		*/
		
		/*
		function redrawWithoutAnimation() {
			// static update without animation
			graph.selectAll("path")
				.data([data]) // set the new data
				.attr("d", line); // apply the new data values
		}
		*/
		
		/*
		setInterval(function() {
		   var v = data.shift(); // remove the first element of the array
		   data.push(v); // add a new element to the array (we're just taking the number we just shifted off the front and appending to the end)
		   if(animate) {
			   redrawWithAnimation();
		   } else {
		   	   redrawWithoutAnimation();
		   }
		}, updateDelay);
		*/
	}
		
	//displayGraphExample("#graph1", 300, 30, "basis", true, 1000, 1000);
