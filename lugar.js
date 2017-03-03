var ubicaciones = []

function sitios(lat, lng, titulo, img, descripcion) {
    // body...
    var sitio = {
        lat: lat,
        lng: lng,
        titulo: titulo,
        img: img,
        descripcion: descripcion
    }
    return sitio;
}

var sitio1 = sitios(6.252036, -75.568447, "Plaza Botero", 'img/botero.jpg', 'La Plaza Botero es un enorme parque enarbolado que alberga 23 monumentales esculturas donadas por Fernando Botero, también se encuentra en esta plaza el Museo de Antioquia en el edificio Art Deco mejor conservado de Colombia.La Plaza Botero esta ubicada al frente del museo de Antioquia o bien llamado museo Botero, el cual fue también una donación del maestro Fernando Botero. En esta plaza o parque cultural y artístico encontramos 23 esculturas en bronce, las cuales están ubicadas y distribuidas a lo largo del parque, desde su comienzo hasta su final        Se aprecian dos fuentes de agua, que permiten que el ambiente del parque sea más ameno, una de estas es la fuente del cacique Nutibara, la cual es una obra del maestro Pedro Nel Gómez y fue restaurada por el metro de Medellín en 1996.' );
        var sitio2 = sitios(6.289108, -75.509348, "Parque Arví", 'img/arvi.jpg', 'Parque Regional Ecoturístico Arví. Parque natural ecológico localizado en el nororiente de Medellín. Abarca territorios de varios municipios del departamento de Antioquia, (Colombia) Envigado, Bello, Copacabana y Medellín. La inversión destinada a este gigantesco parque, el mayor de su género en el país, está realizada en su totalidad por entidades estatales regionales, y con él se ha logrado la hazaña de ofrecerle 12 metros cuadrados de parque a cada habitante de Medellín, cuando antes de este proyecto sólo contaba con 4 metros.');
        var sitio3 = sitios(6.253074, -75.564691, "Parque Bolívar", 'img/bolivar.jpg', 'El Parque de Bolívar, o simplemente Parque Bolívar como se conoce popularmente, es un parque urbano ubicado en plena zona céntrica de la ciudad colombiana de Medellín. Fue inaugurado en 1892 y denominado así en homenaje al libertador Simón Bolívar. ')


        ubicaciones.push(sitio1); ubicaciones.push(sitio2); ubicaciones.push(sitio3);

        function initMap() {
            var myLatLng = {
                lat: 6.267011,
                lng: -75.569115
            };

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
            var ubicacionActual = ubicaciones[indice];
            swal({
                title: 'Estamos viajando a: \n' + ubicacionActual.titulo,
                text: ubicacionActual.descripcion,
                imageUrl: ubicacionActual.img,
                imageWidth: 400,
                imageHeight: 200,
                animation: false
            })


            console.log("Mover" + ubicacionActual.descripcion)
            var myLatLng = {
                lat: ubicacionActual.lat,
                lng: ubicacionActual.lng
            }

            var map = new google.maps.Map(document.getElementById('mapa'), {
                zoom: 15,
                center: myLatLng
            });

            var marker = new google.maps.Marker({
                position: myLatLng,
                map: map,
                title: ubicacionActual.descripcion
            });

        }

        initMap()
