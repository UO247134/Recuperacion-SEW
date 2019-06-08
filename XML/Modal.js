"use strict";

class Modal {
    constructor() {
    };

// When the user clicks the button, open the modal
    desplegarModal(latitud, longitud, modalId,contenidoModalID) {
        var modal = document.getElementById(modalId);
        modal.style.display = "block";
        this.mostrarMapa(latitud, longitud, contenidoModalID);
    }

    ocultarModal(modalId) {
        var modal = document.getElementById(modalId);
        //var span = document.getElementsByClassName("close")[0];
        modal.style.display = "none";
    }

    mostrarMapa(latitud, longitud, modalId) {
        var localizacion = {
            lat: parseFloat(latitud),
            lng: parseFloat(longitud)
        };
        var map = new google.maps.Map(document.getElementById(modalId), {
            zoom: 5,
            center: localizacion
        });
        var marker = new google.maps.Marker({
            position: localizacion,
            map: map
        })
    }

}

let modales = new Modal();