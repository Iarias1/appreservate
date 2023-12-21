function agrandarFoto (src) {
   var imagenAmpliada = document.getElementById("imagen-ampliada");
   imagenAmpliada.src = src;
   document.getElementById('imagenes').style.display = 'block';
}
function cerrarImagen() {
   document.getElementById('imagenes').style.display = 'none';
 }


function reservarCancha() {
   var select = document.getElementById("horariosf");
   var selectedOption = select.options[select.selectedIndex].value;
   alert("Reservó cancha en Area Chica a las " + selectedOption);
}

function reservarCanchaf() {
   var select = document.getElementById("horariosf2");
   var selectedOption = select.options[select.selectedIndex].value;
   alert("Reservó cancha en Cardenal Spignola a las " + selectedOption);
}

function reservarCanchaP() {
   var select = document.getElementById("horariosp");
   var selectedOption = select.options[select.selectedIndex].value;
   alert("Reservó cancha en Area Chica a las " + selectedOption);
}

function reservarCanchaP2() {
   var select = document.getElementById("horariospa");
   var selectedOption = select.options[select.selectedIndex].value;
   alert("Reservó cancha en Punta Verde a las " + selectedOption);
}
