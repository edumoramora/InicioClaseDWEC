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


const btnTema = document.getElementById("btnTema");

// 2. Al pulsarlo, activamos o quitamos la clase "tema-claro" del body
btnTema.addEventListener("click", function () {
  // toggle: si la clase está, la quita; si no está, la pone
  document.body.classList.toggle("tema-claro");

  // 3. Cambiamos el texto del botón según el modo en el que estemos
  if (document.body.classList.contains("tema-claro")) {
    btnTema.textContent = "☀️ Modo claro";
  } else {
    btnTema.textContent = "🌙 Modo oscuro";
  }
});