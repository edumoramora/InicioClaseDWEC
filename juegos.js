
// --- DATOS ---
// Cada juego es un objeto. Para añadir o quitar juegos, solo se toca aquí.
// Nota y precio van como NÚMEROS (no como texto), para poder formatearlos
// y, más adelante, poder ordenar la tabla por ellos.
const juegos = [
    { nombre: "The Legend of Zelda: BOTW", compania: "Nintendo",                       plataforma: "Switch",          valoracion: 9.5, precio: 59.99 },
    { nombre: "God of War Ragnarök",       compania: "Sony Interactive Entertainment", plataforma: "PS5",             valoracion: 9.4, precio: 79.99 },
    { nombre: "Elden Ring",                compania: "FromSoftware",                    plataforma: "Multiplataforma", valoracion: 9.6, precio: 59.99 },
    { nombre: "Super Mario Odyssey",       compania: "Nintendo",                       plataforma: "Switch",          valoracion: 9.7, precio: 59.99 },
    { nombre: "Red Dead Redemption 2",     compania: "Rockstar Games",                 plataforma: "Multiplataforma", valoracion: 9.7, precio: 59.99 },
    { nombre: "Baldur's Gate 3",           compania: "Larian Studios",                 plataforma: "PC",              valoracion: 9.6, precio: 59.99 },
  ];
  // --- REFERENCIAS AL DOM ---
  const cuerpoTabla = document.getElementById("cuerpoJuegos");
  // --- FUNCIONES DE FORMATO ---
  function formatearPrecio(valor) {
    return valor.toLocaleString("es-ES", { style: "currency", currency: "EUR" });
  }
  
  function formatearNota(valor) {
    return valor.toLocaleString("es-ES"); // 9.5 -> "9,5"
  }
  // --- PINTAR LA TABLA ---
  function pintarJuegos(lista) {
    cuerpoTabla.innerHTML = ""; // vaciamos antes, por si se vuelve a pintar
  
    for (const juego of lista) {
      const fila = document.createElement("tr");
      fila.innerHTML = `
        <td>${juego.nombre}</td>
        <td>${juego.compania}</td>
        <td>${juego.plataforma}</td>
        <td>${formatearNota(juego.valoracion)}</td>
        <td>${formatearPrecio(juego.precio)}</td>
      `;
      cuerpoTabla.appendChild(fila);
    }
  }

  // --- ARRANQUE ---
  pintarJuegos(juegos);


  const formulario = document.getElementById("formJuego");

    formulario.addEventListener("submit", function (evento) {
      evento.preventDefault(); // sin esto, la página se recarga y se pierde todo

      // 1. Construimos el objeto del nuevo juego leyendo los inputs
      const nuevoJuego = {
        nombre:     document.getElementById("inNombre").value,
        compania:   document.getElementById("inCompania").value,
        plataforma: document.getElementById("inPlataforma").value,
        valoracion: parseFloat(document.getElementById("inValoracion").value),
        precio:     parseFloat(document.getElementById("inPrecio").value),
      };

      // 2. Lo añadimos a los DATOS y repintamos la tabla desde ellos
      juegos.push(nuevoJuego);
      pintarJuegos(juegos);

      // 3. Limpiamos el formulario para el siguiente
      formulario.reset();
    });