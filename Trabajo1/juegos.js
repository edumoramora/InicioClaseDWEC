
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