"use strict";

class Modal {
    constructor() {
    };

    init(){}

// When the user clicks the button, open the modal
    desplegarModal(Propio) {
        console.log(Propio);
        var modal = document.getElementById(Propio);
        modal.style.display = "block";
    }

// When the user clicks on <span> (x), close the modal
    ocultarModal(Propio) {
        var modal = document.getElementById(Propio);
        //var span = document.getElementsByClassName("close")[0];
        modal.style.display = "none";
    }

// When the user clicks anywhere outside of the modal, close it
//window.onclick = function(event) {
    //  if (event.target == modal) {
    //    modal.style.display = "none";
//}
}
let modales = new Modal();