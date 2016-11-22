var b1 =  document.getElementById("s1");
var i1 = document.getElementById("i1");
var o1 = document.getElementById("o1");

var x1 = [];
var x2 = [];
var y1 = [];
var y2 = [];
var x3 = [];
var y3 = [];
var x4 = [];
var y4 = [];
var x5 = [];
var y5 = [];
var x6 = [];
var y6 = [];


b1.onclick = function() {f1()};


function f1(){

	var N = i1.value;
	var result = [];
	for(var i = -2*N; i<0; i++){
		x1.push(i);
		// y1.push(0);
		result.push(0);
	}
	for(var i =0; i<=N-1; i++){
		x1.push(i);
		// y1.push(1);
		result.push(1);
	}
	for(var i = -2*N; i<0; i++){
		x1.push(i+2*N+N);
		// y1.push(0);
		result.push(0);
	}
	// window.alert(result);
	//o1.innerHTML = "Resulting Sequence : " + "..." + result + "...";
	var trace1 = {
			
			x: x1,
			y: result,
  			mode: 'markers',
  			type: 'bar',};
		var layout = {
	  		title: 'x[n] sequence',
	  		xaxis: {
		    	title: 'n',
		    	range: [-N, 2*N],
		    	titlefont: {	
		      		family: 'Courier New, monospace',
		      		size: 18,
		      		color: '#7f7f7f'
	    		}
	  		},
	  		yaxis: {
	    		title: 'x[n]',
	    		titlefont: {
	      			family: 'Courier New, monospace',
	      			size: 18,
	      			color: '#7f7f7f'
	    		}
	  		}};

	  		var data = [trace1];
	  		var c1 = document.getElementById("c1");
			c1.style.display = 'block';
			Plotly.newPlot('c1', data, layout);

 }


var b2 =  document.getElementById("s2");
var i2 = document.getElementById("i2");
var o2 = document.getElementById("o2");

b2.onclick = function() {f2()};


function f2(){

	var N = i2.value;
	var result = [];
	for(var i = -2*N; i<0; i++){
		x2.push(i);
		result.push(0);
	}
	for(var i =0; i<=N-1; i++){
		x2.push(i);
		result.push( (1/2 * ( 1 - math.cos ( 2*math.pi*i / (N-1) ) )).toFixed(2) );
	}
	for(var i = -2*N; i<0; i++){
		x2.push(i+2*N+N);
		result.push(0);
	}
	// window.alert(result);
	//o2.innerHTML = "Resulting Sequence : " + result;
	var trace2 = {
			
			x: x2,
			y: result,
  			mode: 'markers',
  			type: 'bar',};
		var layout = {
	  		title: 'x[n] sequence',
	  		xaxis: {
		    	title: 'n',
		    	range: [-N, 2*N],
		    	titlefont: {	
		      		family: 'Courier New, monospace',
		      		size: 18,
		      		color: '#7f7f7f'
	    		}
	  		},
	  		yaxis: {
	    		title: 'x[n]',
	    		titlefont: {
	      			family: 'Courier New, monospace',
	      			size: 18,
	      			color: '#7f7f7f'
	    		}
	  		}};

	  		var data = [trace2];
	  		var c2 = document.getElementById("c2");
			c3.style.display = 'block';
			Plotly.newPlot('c2', data, layout);


}

var b3 =  document.getElementById("s3");
var i3 = document.getElementById("i3");
var o3 = document.getElementById("o3");

b3.onclick = function() {f3()};


function f3(){

	var N = i3.value;
	var result = [];
	for(var i = -2*N; i<0; i++){
		x3.push(i);
		result.push(0);
	}
	for(var i =0; i<=N-1; i++){
		x3.push(i);
		result.push( (1/2 * ( 1.08 - 0.92* math.cos ( 2*math.pi*i / (N-1) ) )).toFixed(2) );
	}
	for(var i = -2*N; i<0; i++){
		x3.push(i+2*N+N);
		result.push(0);
	}
	// window.alert(result);
	//o3.innerHTML = "Resulting Sequence : " + result;
	var trace3 = {
			
			x: x3,
			y: result,
  			mode: 'markers',
  			type: 'bar',};
		var layout = {
	  		title: 'x[n] sequence',
	  		xaxis: {
		    	title: 'n',
		    	range: [-N, 2*N],
		    	titlefont: {	
		      		family: 'Courier New, monospace',
		      		size: 18,
		      		color: '#7f7f7f'
	    		}
	  		},
	  		yaxis: {
	    		title: 'x[n]',
	    		titlefont: {
	      			family: 'Courier New, monospace',
	      			size: 18,
	      			color: '#7f7f7f'
	    		}
	  		}};

	  		var data = [trace3];
	  		var c3 = document.getElementById("c3");
			c3.style.display = 'block';
			Plotly.newPlot('c3', data, layout);


}



var b4 =  document.getElementById("s4");
var i4 = document.getElementById("i4");
var o4 = document.getElementById("o4");

b4.onclick = function() {f4()};


function f4(){

	var N = i4.value;
	var result = [];
	for(var i = -2*N; i<0; i++){
		x4.push(i);
		result.push(0);
	}
	for(var i =0; i<=(N-1)/2; i++){
		x4.push(i);

		result.push( (2*i/(N-1)).toFixed(2) );
	}
	for(var i =(N-1)/2; i<=N-1; i++){
		x4.push(i+1);
		result.push( (2-(2*i/(N-1))).toFixed(2) );
	}
	for(var i = -2*N; i<0; i++){
		x4.push(i+2*N+N);

		result.push(0);
	}
	// window.alert(result);
	//o4.innerHTML = "Resulting Sequence : " + result;
	var trace4 = {
			
			x: x4,
			y: result,
  			mode: 'markers',
  			type: 'bar',};
		var layout = {
	  		title: 'x[n] sequence',
	  		xaxis: {
		    	title: 'n',
		    	range: [-N, 2*N],
		    	titlefont: {	
		      		family: 'Courier New, monospace',
		      		size: 18,
		      		color: '#7f7f7f'
	    		}
	  		},
	  		yaxis: {
	    		title: 'x[n]',
	    		titlefont: {
	      			family: 'Courier New, monospace',
	      			size: 18,
	      			color: '#7f7f7f'
	    		}
	  		}};

	  		var data = [trace4];
	  		var c4 = document.getElementById("c4");
			c4.style.display = 'block';
			Plotly.newPlot('c4', data, layout);


}


var b5 =  document.getElementById("s5");
var i5 = document.getElementById("i5");
var o5 = document.getElementById("o5");

b5.onclick = function() {f5()};


function f5(){

	var N = i5.value;
	var result = [];
	for(var i = -2*N; i<0; i++){
		x5.push(i);
		result.push(0);
	}
	for(var i =0; i<=(N-1); i++){
		x5.push(i);
		result.push(      ( 0.42 - 0.5*math.cos(2*math.pi*i/(N-1)) + 0.08*math.cos(4*math.pi*i/(N-1)) ).toFixed(2)              );
	}
	for(var i = -2*N; i<0; i++){
		x5.push(i+2*N+N);
		result.push(0);
	}
	// window.alert(result);
	//o5.innerHTML = "Resulting Sequence : " + result;
	var trace5 = {
			
			x: x5,
			y: result,
  			mode: 'markers',
  			type: 'bar',};
		var layout = {
	  		title: 'x[n] sequence',
	  		xaxis: {
		    	title: 'n',
		    	range: [-N, 2*N],
		    	titlefont: {	
		      		family: 'Courier New, monospace',
		      		size: 18,
		      		color: '#7f7f7f'
	    		}
	  		},
	  		yaxis: {
	    		title: 'x[n]',
	    		titlefont: {
	      			family: 'Courier New, monospace',
	      			size: 18,
	      			color: '#7f7f7f'
	    		}
	  		}};

	  		var data = [trace5];
	  		var c5 = document.getElementById("c5");
			c5.style.display = 'block';
			Plotly.newPlot('c5', data, layout);


}

var b6 =  document.getElementById("s6");
var i6 = document.getElementById("i6");
var i62 = document.getElementById("i62");
var o6 = document.getElementById("o6");

b6.onclick = function() {f6()};


function f6(){

	var N = i6.value;
	var alpha = i62.value
	var result = [];
	for(var i = -2*N; i<0; i++){
		x6.push(i);
		result.push(0);
	}
	for(var i =0; i<=(N-1); i++){
		x6.push(i);
		result.push(      (alpha - (1-alpha)*math.cos(2*math.pi*i/(N-1)) ).toFixed(2)              );
	}
	for(var i = -2*N; i<0; i++){
		x6.push(i+2*N+N);
		result.push(0);
	}
	// window.alert(result);
	//o6.innerHTML = "Resulting Sequence : " + result;
	var trace6 = {
			
			x: x6,
			y: result,
  			mode: 'markers',
  			type: 'bar',};
		var layout = {
	  		title: 'x[n] sequence',
	  		xaxis: {
		    	title: 'n',
		    	range: [-N, 2*N],
		    	titlefont: {	
		      		family: 'Courier New, monospace',
		      		size: 18,
		      		color: '#7f7f7f'
	    		}
	  		},
	  		yaxis: {
	    		title: 'x[n]',
	    		titlefont: {
	      			family: 'Courier New, monospace',
	      			size: 18,
	      			color: '#7f7f7f'
	    		}
	  		}};

	  		var data = [trace6];
	  		var c6 = document.getElementById("c6");
			c6.style.display = 'block';
			Plotly.newPlot('c6', data, layout);


}