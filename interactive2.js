var diameter = 700, //max size of the bubbles
   color    = d3.scale.category20b(); //color category

var bubble = d3.layout.pack()
    .sort(null)
    .size([diameter, diameter])
    .padding(1.5);

var svg = d3.select("body")
    .append("svg")
    .attr("width", diameter)
    .attr("height", diameter)
    .attr("class", "bubble");



d3.csv("meteo2.csv", function(error, data){

    //convert numerical values from strings to numbers
    data = data.map(function(d){ d.value = +d["mass"]; return d;});

    //bubbles needs very specific format, convert data to this.
    var nodes = bubble.nodes({children:data}).filter(function(d) { return !d.children; });


var fell = "";
var found = "";
    //setup the chart
    var bubbles = svg.append("g")
        .attr("transform", "translate(0,0)")
        .selectAll(".bubble")
        .data(nodes)
        .enter();



    document.getElementById("tooltip").style.display = 'none';
    //create the bubbles
    bubbles.append("circle")
        .attr("r", function(d){ return d.r; })
        .attr("cx", function(d){ return d.x; })
        .attr("cy", function(d){ return d.y; })
        .style("fill", function(d) {

            if (d.fall == "Fell")
            {
                fell++;
                return "rgba(255,123,8,1)";
            }
            else if (d.fall == "Found")
            {
                found++;
                return "rgba(108, 111, 124, 1)";
            }
        })
        .style("stroke-opacity", .2)
        .style("stroke", function(d) {

            if (d.fall == "Fell")
            {
                return "rgba(250, 15, 160, 1)";
            }
            else if (d.fall == "Found")
            {
                return "#f4d03f";
            }
        })

        .on("mouseover", function(d){

        d3.select(this).style("fill", "rgb(242, 242, 242)").style("stroke-opacity",1).style("stroke", "rgba(250, 15, 160, 0.2)");
         d3.select('#tooltip')
           .style("left", d3.event.pageX - 50 + "px")
           .style("top", d3.event.pageY - 70 + "px")
          .select("#name")
           .text(d.name);

          d3.select('#tooltip')
             .select("#mass")
             .text(d.mass.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,"));

            d3.select('#tooltip')
             .select("#year")
             .text(d.year);

             //Show the tooltip
             document.getElementById("tooltip").style.display = 'block';
             d3.select("#tooltip").classed("hidden", false);
       })
      .on("mouseout", function(){
        //Hide the tooltip
       d3.select(this).style("fill", function(d) {

            if (d.fall == "Fell")
            {
                return "rgba(255,123,8,1)";
            }
            else if (d.fall == "Found")
            {
                return "rgba(108, 111, 124, 1)";
            }
        });

        d3.select(this).style("stroke", function(d)
        {
            if (d.fall == "Fell")
            {
                return "rgba(250, 15, 160, 1)";
            }
            else if (d.fall == "Found")
            {
                return "#f4d03f";
            }
        });
       
         d3.select("#tooltip").classed("hidden", true);
         document.getElementById("tooltip").style.display = 'none';
       });

document.getElementById("fell").innerHTML = fell.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
document.getElementById("found").innerHTML = found.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
document.getElementById("total").innerHTML = (fell + found).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");

var total = fell + found
var percentFell = ((fell/total) *100).toFixed(2);
var percentFound = ((found/total) *100).toFixed(2);

document.getElementById("bar-1").style.width = percentFell+"%";
document.getElementById("bar-2").style.width = percentFound+"%";

document.getElementById("bar-1Info").innerHTML = percentFell+"%";
document.getElementById("bar-2Info").innerHTML = percentFound+"%";
});
