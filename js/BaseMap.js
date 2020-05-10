// feature1
var map1 = L.map('Map1', {
	center: [45, 0],
	zoom: 1.5,
	scrollWheelZoom:false,
	zoomControl:false,
});

L.tileLayer('https://api.mapbox.com/styles/v1/{username}/{id}/tiles/{tilesize}/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: '&copy<a href="https://www.openstreetmap.org/">OpenStreetMap</a>  &copy<a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 14,
	username: 'reeply',
	id: 'ck8nyguh6022j1iru356j2ufq',
    tilesize: 512,
	zoomOffset: 0,
    accessToken: 'pk.eyJ1IjoicmVlcGx5IiwiYSI6ImNpaGZtd29yZzBtNDh2ZmtsY3ozY3lkNjEifQ.Ab5WiJwK8sa0kQhOKhi78g'
}).addTo(map1);




// feature2
var map2 = L.map('Map2', {
	center: [45, 0],
	zoom: 1.5,
	scrollWheelZoom:false,
	zoomControl:false,
});

L.tileLayer('https://api.mapbox.com/styles/v1/{username}/{id}/tiles/{tilesize}/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: '&copy<a href="https://www.openstreetmap.org/">OpenStreetMap</a>  &copy<a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 14,
	username: 'reeply',
	id: 'ck8nyguh6022j1iru356j2ufq',
    tilesize: 512,
	zoomOffset: 0,
    accessToken: 'pk.eyJ1IjoicmVlcGx5IiwiYSI6ImNpaGZtd29yZzBtNDh2ZmtsY3ozY3lkNjEifQ.Ab5WiJwK8sa0kQhOKhi78g'
}).addTo(map2);




// feature3
var map3 = L.map('Map3', {
	center: [45, 0],
	zoom: 1.5,
	scrollWheelZoom:false,
	zoomControl:false,
});

L.tileLayer('https://api.mapbox.com/styles/v1/{username}/{id}/tiles/{tilesize}/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: '&copy<a href="https://www.openstreetmap.org/">OpenStreetMap</a>  &copy<a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 14,
	username: 'reeply',
	id: 'ck8nyguh6022j1iru356j2ufq',
    tilesize: 512,
	zoomOffset: 0,
    accessToken: 'pk.eyJ1IjoicmVlcGx5IiwiYSI6ImNpaGZtd29yZzBtNDh2ZmtsY3ozY3lkNjEifQ.Ab5WiJwK8sa0kQhOKhi78g'
}).addTo(map3);






