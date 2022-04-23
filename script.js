const tilesProvider = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
let myMap = L.map('terraMap').setView([-34.595986 ,-58.3724715],20)
L.tileLayer(tilesProvider,{
   maxZoom: 22,
   
} ) .addTo(myMap)

 var marker = L.marker([51.5, -0.09]).addTo(map);