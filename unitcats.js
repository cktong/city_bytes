
// var layername = 'listings-accessibility-5w8m1a'	
// var layername = 'nyc-listings-accessibility-9kdwt3'
// var layername = 'ny-listings-accessibility-dmmj0i'
// var layername = 'atlanta-listings-accessibilit-15y8ba'
// var layername = 'la-listings-accessibility-cuukn9'

var layer_sf = {
				'name': 'San Francisco',
				'location': [-122.35, 37.77],
				// 'link': 'sf-listings-accessibility-8j7weg'
				'link': 'bayarea-listings-accessibilit-ck8ev4'
				}

var layer_nyc = {
				'name': 'New York City',
				'location': [-73.998,40.721],
				'link': 'ny-listings-accessibility-dmmj0i'
				}

var layer_la = {
				'name': 'Los Angeles',
				'location': [-118.325,34.031],
				'link': 'la-listings-accessibility-cuukn9'
				}

var layer_atl = {
				'name': 'Atlanta',
				'location': [-84.381,33.768],
				'link': 'atlanta-listings-accessibilit-15y8ba'
				}

// Define color categories for mapping listings

// var colors = ['#CC0133', '#990166', '#4D00B2', '#0000FF']; //red-to-blue
// var colors = ['#f0f9e8', '#bae4bc', '#7bccc4', '#2b8cbe']; //mint
// var colors = ['#fee5d9', '#fcae91', '#fb6a4a', '#cb181d']; //color brewer red
// var colors = ['#F80C10', '#F2109B', '#B413ED', '#181AE7']; //red-to-blue2
// var colors = ['#6EEAF7', '#4B96F0', '#3158EB', '#181AE7']; //red-to-blue
// var colors = ['#ffffcc','#a1dab4','#41b6c4','#2c7fb8','#253494','#fed976','#feb24c','#fd8d3c','#f03b20','#bd0026']; // Bright 
// var colors = ['#E1FD3A', '#EA6529', '#F0001F', '#A6071C']; //yellow-to-red

var biz_colors = ['#bae4bc','#EA6529','#fdffd1']
var retail_colors = ['#ffffff','#44EDFF','#3EABE8']
var listings_colors = ['#3347B2','#7B90FF','#FFD962']

var biz_labels = {0: {'label': '< 5', 'color': biz_colors[0]}, 1: {'label': '5 &ndash; 60', 'color': biz_colors[1]}, 
			   2: {'label': '> 60', 'color': biz_colors[2]}};

var retail_labels = {0: {'label': '<5', 'color': retail_colors[0]}, 1: {'label': '6&ndash;10', 'color': retail_colors[1]}, 
			   2: {'label': '11&ndash;40', 'color': retail_colors[2]}};		 

var listings_labels = {0: {'label': '< $1000', 'color': listings_colors[0]}, 1: {'label': '$1000 &ndash; $3000', 'color': listings_colors[1]}, 
			   2: {'label': '> $3000', 'color': listings_colors[2]}};


// the stops for radius and color of maps
var business_number = {
 	property: 'business_number',
	type: 'exponential', 
	stops: [
				[0,biz_colors[0]],
				[5,biz_colors[0]],
				[10,biz_colors[1]],
				[60, biz_colors[2]]]
};
var business_radius_props = {
	property: 'business_number',
    'base': 1,
    type: 'exponential',
	stops: [
				[{zoom: 11, value:0}, .5],
				[{zoom: 11, value:5},1],
				[{zoom: 11, value:20},1.5],
				[{zoom: 11, value:40}, 2],
				[{zoom: 20, value:0}, 1.5],
				[{zoom: 20, value:5},6],
				[{zoom: 20, value:20},8],
				[{zoom: 20, value:40}, 10]
				]
};

var retail = {
 	property: 'retail',
	type: 'exponential', 
	stops: [
				[0,retail_colors[0]],
				[5,retail_colors[0]],
				[10,retail_colors[1]],
				[20, retail_colors[2]]]
};
var retail_radius_props = {
	property: 'retail',
    'base': 1,
    type: 'exponential',
	stops: [
				[{zoom: 11, value:0}, .5],
				[{zoom: 11, value:5},1],
				[{zoom: 11, value:10},1.5],
				[{zoom: 11, value:20}, 2],
				[{zoom: 11, value:100}, 4],
				[{zoom: 20, value:0}, .5],
				[{zoom: 20, value:5},6],
				[{zoom: 20, value:10},8],
				[{zoom: 20, value:20}, 10],
				[{zoom: 20, value:100}, 15]
				]
};
	
var listings_amount = {
 	property: 'median_rent',
	type: 'interval', 
	stops: [
				[0, listings_colors[0]],
				[1000, listings_colors[0]],
				[2000, listings_colors[1]],
				[3000, listings_colors[2]]]
	};

var listings_radius_props = {
	property: 'listings_amount',
    'base': 1,
    type: 'exponential',
	stops: [
				[{zoom: 11, value:0}, .5],
				[{zoom: 11, value:5},1],
				[{zoom: 11, value:10},1.5],
				[{zoom: 11, value:20}, 2],
				[{zoom: 20, value:0}, 4],
				[{zoom: 20, value:5},6],
				[{zoom: 20, value:10},8],
				[{zoom: 20, value:20}, 10]
				]
};