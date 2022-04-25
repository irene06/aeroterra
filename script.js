//Empiezo por la eleccion de OpenStreetMaps ya que es OpenSource

/* Funcionalidad 2:Funcionalidad
Incorporar un mapa (puede ser full screen) (se puede
utilizar cualquier API ej: ArcGIS JavaScript API, Google
Maps, Leaflet, Mapbox) (Tener en cuenta la generación
de una app-key para utilizar la librería de ser necesario)
El formulario del punto anterior debe ser capaz de
agregar puntos (o marcadores) sobre el mapa.
*/

const tilesProvider = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png' //utilice openstreetmap ya que es opensource
let myMap = L.map('terraMap').setView([-34.595986,-58.3724715],18); //me centre en la lng y lat especificada en el pdf. agregue zoom
L.tileLayer(tilesProvider,{
}).addTo(myMap);
//creando el icono para el marcador
var myIcon = L.icon({
   iconUrl: 'markerblue.png',
   iconSize: [50, 32],
   iconAnchor: [30, 60],
});
//creando el marcador 
L.marker([-34.595986, -58.3724715], {icon: myIcon}).addTo(myMap); //añado el marcador y el icono del marcador 

const marker = L.marker([-34.595986,-58.3724715],{draggable: true}).addTo(myMap);

marker.setLatLng([latitud, longitud]).addTo(myMap);
document.getElementById('lat').textContent = latitud;
document.getElementById('lon').textContent = longitud;

myMap.on('dblclick', e => {
   let latLng = myMap.mouseEventToLatLng.on('dragend', markerOnClick)(e.originalEvent)
})



