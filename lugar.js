var ubicaciones=[]

function sitios(lat,lng,descripcion) {
    // body...
    var sitio={
        lat:lat,
        lng:lng,
        descripcion:descripcion
    }
    return sitio;
}

var sitio1=sitios(6.252036,-75.568447,"Plaza Botero");
var sitio2=sitios(6.289108,-75.509348,"Parque Arví");
var sitio3=sitios(6.253074,-75.564691,"Parque Bolívar")


ubicaciones.push(sitio1);
ubicaciones.push(sitio2);
ubicaciones.push(sitio3);

function initMap() {
  var myLatLng = {lat:6.267011, lng: -75.569115};

  var map = new google.maps.Map(document.getElementById('mapa'), {
    zoom: 15,
    center: myLatLng
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Universidad de Antioquia'
  });
}
function moverMapa(indice) {
    var ubicacionActual=ubicaciones[indice];

    console.log("Mover"+ubicacionActual.descripcion)
    var myLatLng={lat:ubicacionActual.lat,lng:ubicacionActual.lng}

    var map = new google.maps.Map(document.getElementById('mapa'), {
    zoom: 15,
    center: myLatLng
  });

      var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title:ubicacionActual.descripcion 
  });
    
}

initMap()