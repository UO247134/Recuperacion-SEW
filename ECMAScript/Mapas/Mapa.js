"use strict";

class Mapa {
    constructor() {
        this.datos = new Map();
        this.inicializar();
        var tamaño = $(window).height() - $("h1").outerHeight(true) - $("h2").outerHeight(true)
            - $("footer").outerHeight(true);
        $("main").css("height", "" + tamaño + "px");
    }

    inicializar() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.obtener, this.errores);
        } else {
            alert("Geolocación no es soportada por navegador.");
        }
    }

    obtener(posicion) {
        var coordenadas = posicion.coords;
        mapa.datos.set('Latitud', 14.569016);
        mapa.datos.set('Longitud', -90.551357);
        mapa.mostrar();

    }

    mostrar() {
        var localizacion = {
            lat: this.datos.get("Latitud"),
            lng: this.datos.get("Longitud")
        };
        var map = new google.maps.Map(document.getElementsByTagName('main')[0], {
            zoom: 15,
            center: localizacion
        });
        var marker = new google.maps.Marker({
            position: localizacion,
            map: map
        });

    }

    errores(error) {
        alert('Error: ' + error.code + ' ' + error.message);
    }

}

var mapa = new Mapa();