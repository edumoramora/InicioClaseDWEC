console.log("¡Hola DWEC! Mi taller ya funciona.");


const boton = document.getElementById("miBoton");
const parrafo = document.getElementById("presentacion");

// 2. Creamos una variable para contar las pulsaciones
let veces = 0;

// 3. Le decimos al botón que "escuche" los clics.
//    Cada vez que se pulse, se ejecutará esta función.
boton.addEventListener("click", function () {
  veces = veces + 1;   // sumamos uno al contador
  parrafo.textContent = "Has pulsado el botón " + veces + " veces.";
});
