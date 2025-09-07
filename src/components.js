// Lógica del marcador de tenis
let jugador1 = 0;
let jugador2 = 0;

function obtenerPuntaje() {
  const puntajes = ['love', '15', '30', '40'];

  // Deuce cuando ambos jugadores tienen 40
  if (jugador1 === 3 && jugador2 === 3) {
    return 'Deuce';
  }

  // Ventaja de un jugador
  if (jugador1 === 4 && jugador2 === 3) {
    return 'Ventaja Jugador 1';
  }
  if (jugador2 === 4 && jugador1 === 3) {
    return 'Ventaja Jugador 2';
  }

  // Ganador
  if (jugador1 === 4) {
    return 'Ganador Jugador 1';
  }
  if (jugador2 === 4) {
    return 'Ganador Jugador 2';
  }

  // Puntajes normales
  return `${puntajes[jugador1]}-${puntajes[jugador2]}`;
}

function jugador1Anota() {
  if (jugador1 < 4) {
    jugador1++;
  }
}

function jugador2Anota() {
  if (jugador2 < 4) {
    jugador2++;
  }
}

function resetearMarcador() {
  jugador1 = 0;
  jugador2 = 0;
}

function actualizarPuntaje() {
  document.getElementById('puntaje').textContent = obtenerPuntaje();
}

// Eventos de los botones
document.getElementById('jugador1Btn').addEventListener('click', () => {
  jugador1Anota();
  actualizarPuntaje();
});

document.getElementById('jugador2Btn').addEventListener('click', () => {
  jugador2Anota();
  actualizarPuntaje();
});

document.getElementById('resetearBtn').addEventListener('click', () => {
  resetearMarcador();
  actualizarPuntaje();
});

// Inicializar el puntaje
actualizarPuntaje();