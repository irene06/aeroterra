/*Incorporar un mapa (puede ser full screen) (se puede
    utilizar cualquier API ej: ArcGIS JavaScript API, Google
    Maps, Leaflet, Mapbox) (Tener en cuenta la generación
    de una app-key para utilizar la librería de ser necesario)
    El formulario del punto anterior debe ser capaz de
    agregar puntos (o marcadores) sobre el mapa.

*/


const tilesProvider ='https://{s}.tile.openstreetmap.de/{z}/{x}/{y}.png' //utilice openstreetmap y leaflet ya que es opensource
let myMap = L.map('terraMap').setView([-34.595986,-58.3724715], 18); //me centre en la lng y lat especificada en el pdf. agregue zoom
L.tileLayer(tilesProvider, {
    maxZoom:22,
}).addTo(myMap);
/*
var lat=x;
var lon=y;
if lon(-180 < x < 180) {
    lon=true;
}else lon=false
if lat(-90 < y < 90){
    lat=true;
}
    )
    else lat= false;

*/

//creando el icono para el marcador
var myIcon = L.icon({
    iconUrl: 'markerblue.png',
    iconSize: [50, 32],
    iconAnchor: [30, 60],
 });

 //creando el marcador 
L.marker([-34.595986, -58.3724715], { icon: myIcon }).addTo(myMap); //añado el marcador y el icono del marcador  en el punto de interés
const marker = L.marker([-34.595986, -58.3724715], { draggable: true }).addTo(myMap);// hago que el marcador sea arrastrable
//creando el popup
var popup = L.popup()
    .setLatLng([-34.595986, -58.3724715])
    .setContent("-34.595986, -58.3724715")
    .openOn(myMap);
function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("Las coordenadas son:<br> " +  e.latlng.lat.toString() + "," +  e.latlng.lng.toString())
        .addTo(myMap);
} 
function geoposOK(pos){
    pos.coords.enableHighAccuracy
    var lat = pos.coords.latitude;
    var long=pos.coords.longitude;
    posElt.textContent='Estas en la posicion $(lat),$(long)'
}
