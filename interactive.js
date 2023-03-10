
// set the dimensions and margins of the graph
var margin = {top: 20, right: 20, bottom: 30, left: 40},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;



//basic map config with custom fills, mercator projection
      var map = new Datamap({
        scope: 'world',
        element: document.getElementById('container1'),
        projection: 'equirectangular',
        height: 650,
        responsive: false,
        fills: {
          defaultFill: 'rgba(255, 255, 255, 1)',
          a: 'rgba(255,123,8,1)',
          b: 'rgba(108, 111, 124, 1)',
        },
        dataType: 'csv',
        geographyConfig: 
        {
        dataUrl: null, //if not null, datamaps will fetch the map JSON (currently only supports topojson)
        hideAntarctica: false,
        borderWidth: 1,
        borderOpacity: 1,
        borderColor: '#d9d9d9',
        highlightOnHover: true,
        highlightFillColor: '#f7dc6f',
        highlightBorderColor: 'rgba(250, 15, 160, 0.2)',
        highlightBorderWidth: 2,
        highlightBorderOpacity: 1
    	},
    	bubblesConfig: {
    	highlightOnHover: true,
        highlightFillColor: 'rgb(242, 242, 242)',
        highlightBorderColor: 'rgba(250, 15, 160, 0.2)',
        highlightBorderWidth: 2,
        highlightBorderOpacity: 1,
        highlightFillOpacity: 0.85,
        radius: 4.2,
        exitDelay: 100
    	}
        
        // data: {
        //   USA: {fillKey: 'lt50' },
        //   RUS: {fillKey: 'lt50' },
        //   CAN: {fillKey: 'lt50' },
        //   BRA: {fillKey: 'gt50' },
        //   ARG: {fillKey: 'gt50'},
        //   COL: {fillKey: 'gt50' },
        //   AUS: {fillKey: 'gt50' },
        //   ZAF: {fillKey: 'gt50' },
        //   MAD: {fillKey: 'gt50' }       
        // }
      });


 //Global variables for the slider
var inputValue = "";
var year = ["Off","2000","2001","2002","2003","2004","2005","2006","2007","2008","2009","2010"];



// pass value to switch case from slider
function update(value) {
    document.getElementById("range").innerHTML=year[value];
    inputValue = year[value];
       // d3.selectAll(".datamaps-bubble")
    //    .attr("fill", dateMatch);
}

// when the input range changes update the value 
//plot the values based on the timeslide values - triggers after changes in the timeslide
d3.select("#timeslide").on("input", function() {
    update(+this.value);
    
   
// get the data
d3.csv("meteo2.csv", function(error, data) {
  if (error) throw error;
   
    
	//bubbles, custom popup on hover template
	// format the data
	var count = 0;
	var loop = [];

    data.forEach(function(d) {
    	d.mass = +d.mass;


//create an aray of data from the dataset inside switch case 
switch(inputValue) {
        case "2000":
            if (d.year == "2000") 
       		{
       			if (d.fall == "Fell")
       			{
       				loop.push ({name: d.name, mass: d.mass, year: d.year, latitude: d.reclat, longitude: d.reclong, borderWidth: 1, borderOpacity: 1,
       				 borderColor: 'rgba(250, 15, 160, 1)', fillOpacity: 0.75, animate: true, highlightOnHover: true,
       				 highlightBorderWidth: 2, highlightBorderOpacity: 1, highlightFillOpacity: 0.85, exitDelay: 100, fillKey: 'a' });
       				
       			}
			else if (d.fall == "Found") {
					loop.push ({name: d.name, mass: d.mass, year: d.year, latitude: d.reclat, longitude: d.reclong, borderWidth: 1, borderOpacity: 1,
       				 borderColor: '#f4d03f', fillOpacity: 0.75, animate: true, highlightOnHover: true,
       				 highlightBorderWidth: 2, highlightBorderOpacity: 1, highlightFillOpacity: 0.85, exitDelay: 100, fillKey: 'b' });
				}
				count++;
			}
        break;
        case "2001":
            if (d.year == "2001") 
       		{
				if (d.fall == "Fell")
       			{
       				loop.push ({name: d.name, mass: d.mass, year: d.year, latitude: d.reclat, longitude: d.reclong, borderWidth: 1, borderOpacity: 1,
       				 borderColor: 'rgba(250, 15, 160, 1)', fillOpacity: 0.75, animate: true, highlightOnHover: true,
       				 highlightBorderWidth: 2, highlightBorderOpacity: 1, highlightFillOpacity: 0.85, exitDelay: 100, fillKey: 'a' });
       				
       			}
			else if (d.fall == "Found") {
					loop.push ({name: d.name, mass: d.mass, year: d.year, latitude: d.reclat, longitude: d.reclong, borderWidth: 1, borderOpacity: 1,
       				 borderColor: '#f4d03f', fillOpacity: 0.75, animate: true, highlightOnHover: true,
       				 highlightBorderWidth: 2, highlightBorderOpacity: 1, highlightFillOpacity: 0.85, exitDelay: 100, fillKey: 'b' });
				}
				count++;
			}
        break;
        case "2002":
            if (d.year == "2002") 
       		{
				if (d.fall == "Fell")
       			{
       				loop.push ({name: d.name, mass: d.mass, year: d.year, latitude: d.reclat, longitude: d.reclong, borderWidth: 1, borderOpacity: 1,
       				 borderColor: 'rgba(250, 15, 160, 1)', fillOpacity: 0.75, animate: true, highlightOnHover: true,
       				 highlightBorderWidth: 2, highlightBorderOpacity: 1, highlightFillOpacity: 0.85, exitDelay: 100, fillKey: 'a' });
       				
       			}
			else if (d.fall == "Found") {
					loop.push ({name: d.name, mass: d.mass, year: d.year, latitude: d.reclat, longitude: d.reclong, borderWidth: 1, borderOpacity: 1,
       				 borderColor: '#f4d03f', fillOpacity: 0.75, animate: true, highlightOnHover: true,
       				 highlightBorderWidth: 2, highlightBorderOpacity: 1, highlightFillOpacity: 0.85, exitDelay: 100, fillKey: 'b' });
				}
				count++;
			}
        break;
        case "2003":
            if (d.year == "2003") 
       		{
       			if (d.fall == "Fell")
       			{
       				loop.push ({name: d.name, mass: d.mass, year: d.year, latitude: d.reclat, longitude: d.reclong, borderWidth: 1, borderOpacity: 1,
       				 borderColor: 'rgba(250, 15, 160, 1)', fillOpacity: 0.75, animate: true, highlightOnHover: true,
       				 highlightBorderWidth: 2, highlightBorderOpacity: 1, highlightFillOpacity: 0.85, exitDelay: 100, fillKey: 'a' });
       				
       			}
			else if (d.fall == "Found") {
					loop.push ({name: d.name, mass: d.mass, year: d.year, latitude: d.reclat, longitude: d.reclong, borderWidth: 1, borderOpacity: 1,
       				 borderColor: '#f4d03f', fillOpacity: 0.75, animate: true, highlightOnHover: true,
       				 highlightBorderWidth: 2, highlightBorderOpacity: 1, highlightFillOpacity: 0.85, exitDelay: 100, fillKey: 'b' });
				}
				count++;
			}
        break;
        case "2004":
            if (d.year == "2004") 
       		{
				if (d.fall == "Fell")
       			{
       				loop.push ({name: d.name, mass: d.mass, year: d.year, latitude: d.reclat, longitude: d.reclong, borderWidth: 1, borderOpacity: 1,
       				 borderColor: 'rgba(250, 15, 160, 1)', fillOpacity: 0.75, animate: true, highlightOnHover: true,
       				 highlightBorderWidth: 2, highlightBorderOpacity: 1, highlightFillOpacity: 0.85, exitDelay: 100, fillKey: 'a' });
       				
       			}
			else if (d.fall == "Found") {
					loop.push ({name: d.name, mass: d.mass, year: d.year, latitude: d.reclat, longitude: d.reclong, borderWidth: 1, borderOpacity: 1,
       				 borderColor: '#f4d03f', fillOpacity: 0.75, animate: true, highlightOnHover: true,
       				 highlightBorderWidth: 2, highlightBorderOpacity: 1, highlightFillOpacity: 0.85, exitDelay: 100, fillKey: 'b' });
				}
				count++;
			}
        break;
        case "2005":
            if (d.year == "2005") 
       		{
				if (d.fall == "Fell")
       			{
       				loop.push ({name: d.name, mass: d.mass, year: d.year, latitude: d.reclat, longitude: d.reclong, borderWidth: 1, borderOpacity: 1,
       				 borderColor: 'rgba(250, 15, 160, 1)', fillOpacity: 0.75, animate: true, highlightOnHover: true,
       				 highlightBorderWidth: 2, highlightBorderOpacity: 1, highlightFillOpacity: 0.85, exitDelay: 100, fillKey: 'a' });
       				
       			}
			else if (d.fall == "Found") {
					loop.push ({name: d.name, mass: d.mass, year: d.year, latitude: d.reclat, longitude: d.reclong, borderWidth: 1, borderOpacity: 1,
       				 borderColor: '#f4d03f', fillOpacity: 0.75, animate: true, highlightOnHover: true,
       				 highlightBorderWidth: 2, highlightBorderOpacity: 1, highlightFillOpacity: 0.85, exitDelay: 100, fillKey: 'b' });
				}
				count++;
			}
        break;
        case "2006":
            if (d.year == "2006") 
       		{
				if (d.fall == "Fell")
       			{
       				loop.push ({name: d.name, mass: d.mass, year: d.year, latitude: d.reclat, longitude: d.reclong, borderWidth: 1, borderOpacity: 1,
       				 borderColor: 'rgba(250, 15, 160, 1)', fillOpacity: 0.75, animate: true, highlightOnHover: true,
       				 highlightBorderWidth: 2, highlightBorderOpacity: 1, highlightFillOpacity: 0.85, exitDelay: 100, fillKey: 'a' });
       				
       			}
			else if (d.fall == "Found") {
					loop.push ({name: d.name, mass: d.mass, year: d.year, latitude: d.reclat, longitude: d.reclong, borderWidth: 1, borderOpacity: 1,
       				 borderColor: '#f4d03f', fillOpacity: 0.75, animate: true, highlightOnHover: true,
       				 highlightBorderWidth: 2, highlightBorderOpacity: 1, highlightFillOpacity: 0.85, exitDelay: 100, fillKey: 'b' });
				}
				count++;
			}
        break;
        case "2007":
            if (d.year == "2007") 
       		{
				if (d.fall == "Fell")
       			{
       				loop.push ({name: d.name, mass: d.mass, year: d.year, latitude: d.reclat, longitude: d.reclong, borderWidth: 1, borderOpacity: 1,
       				 borderColor: 'rgba(250, 15, 160, 1)', fillOpacity: 0.75, animate: true, highlightOnHover: true,
       				 highlightBorderWidth: 2, highlightBorderOpacity: 1, highlightFillOpacity: 0.85, exitDelay: 100, fillKey: 'a' });
       				
       			}
			else if (d.fall == "Found") {
					loop.push ({name: d.name, mass: d.mass, year: d.year, latitude: d.reclat, longitude: d.reclong, borderWidth: 1, borderOpacity: 1,
       				 borderColor: '#f4d03f', fillOpacity: 0.75, animate: true, highlightOnHover: true,
       				 highlightBorderWidth: 2, highlightBorderOpacity: 1, highlightFillOpacity: 0.85, exitDelay: 100, fillKey: 'b' });
				}
				count++;
			}
        break;
        case "2008":
            if (d.year == "2008") 
       		{
				if (d.fall == "Fell")
       			{
       				loop.push ({name: d.name, mass: d.mass, year: d.year, latitude: d.reclat, longitude: d.reclong, borderWidth: 1, borderOpacity: 1,
       				 borderColor: 'rgba(250, 15, 160, 1)', fillOpacity: 0.75, animate: true, highlightOnHover: true,
       				 highlightBorderWidth: 2, highlightBorderOpacity: 1, highlightFillOpacity: 0.85, exitDelay: 100, fillKey: 'a' });
       				
       			}
			else if (d.fall == "Found") {
					loop.push ({name: d.name, mass: d.mass, year: d.year, latitude: d.reclat, longitude: d.reclong, borderWidth: 1, borderOpacity: 1,
       				 borderColor: '#f4d03f', fillOpacity: 0.75, animate: true, highlightOnHover: true,
       				 highlightBorderWidth: 2, highlightBorderOpacity: 1, highlightFillOpacity: 0.85, exitDelay: 100, fillKey: 'b' });
				}
				count++;
			}
        break;
        case "2009":
            if (d.year == "2009") 
       		{
				if (d.fall == "Fell")
       			{
       				loop.push ({name: d.name, mass: d.mass, year: d.year, latitude: d.reclat, longitude: d.reclong, borderWidth: 1, borderOpacity: 1,
       				 borderColor: 'rgba(250, 15, 160, 1)', fillOpacity: 0.75, animate: true, highlightOnHover: true,
       				 highlightBorderWidth: 2, highlightBorderOpacity: 1, highlightFillOpacity: 0.85, exitDelay: 100, fillKey: 'a' });
       				
       			}
			else if (d.fall == "Found") {
					loop.push ({name: d.name, mass: d.mass, year: d.year, latitude: d.reclat, longitude: d.reclong, borderWidth: 1, borderOpacity: 1,
       				 borderColor: '#f4d03f', fillOpacity: 0.75, animate: true, highlightOnHover: true,
       				 highlightBorderWidth: 2, highlightBorderOpacity: 1, highlightFillOpacity: 0.85, exitDelay: 100, fillKey: 'b' });
				}
				count++;
			}
        break;
        case "2010":
            if (d.year == "2010") 
       		{
				if (d.fall == "Fell")
       			{
       				loop.push ({name: d.name, mass: d.mass, year: d.year, latitude: d.reclat, longitude: d.reclong, borderWidth: 1, borderOpacity: 1,
       				 borderColor: 'rgba(250, 15, 160, 1)', fillOpacity: 0.75, animate: true, highlightOnHover: true,
       				 highlightBorderWidth: 2, highlightBorderOpacity: 1, highlightFillOpacity: 0.85, exitDelay: 100, fillKey: 'a' });
       				
       			}
			else if (d.fall == "Found") {
					loop.push ({name: d.name, mass: d.mass, year: d.year, latitude: d.reclat, longitude: d.reclong, borderWidth: 1, borderOpacity: 1,
       				 borderColor: '#f4d03f', fillOpacity: 0.75, animate: true, highlightOnHover: true,
       				 highlightBorderWidth: 2, highlightBorderOpacity: 1, highlightFillOpacity: 0.85, exitDelay: 100, fillKey: 'b' });
				}
				count++;
			}
        break;
    }


      });

//convert the array into JSON
    var data = JSON.stringify({loop});

 //remove the rot object of JSON
    var parsedJson = JSON.parse(data);
    var data2 = parsedJson.loop;

 //console.log(data2);
 //console.log(count);
 //total count of the meteorites
 document.getElementById("count").innerHTML = count;

 //selected year for the map
 // if (inputValue != 'Off')
 // {
 // 	document.getElementById("year").innerHTML = inputValue;
 // }
 // else
 // {
 // 	document.getElementById("year").innerHTML = "";
 // }


     map.bubbles( data2//[ 
      	// {"name": 'Chilly', "latitude": -25.32, "longitude": 120.32, "radius": 18, "fillKey": 'lt50'},
       //{name: 'Hot again', latitude: 21.32, longitude: -84.32, radius: 8, fillKey: 'gt50'},
		//]
		, 
     {
       popupTemplate: function(d) {
         return "<div class='hoverinfo'>" + "<b>Name of meteorite: </b>" + d.name + "</br>  <b>Mass in grams: </b>" + d.mass.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") + "</div>";
       }
     });
   

});
 });



