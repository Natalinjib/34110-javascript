'use strict';

// Push de Servicios

const MARCA = "Chazki - Logística de Punta a Punta"
const BIENVENIDA = ("¡Bienvenido a la " + MARCA + "!");

console.log(MARCA);
alert(MARCA);

let services = [];

console.log(services);

let end;

while (!end) {
  let service = prompt('Que servicio necesitas?');
  services.push(service);
  end = confirm('Eso es todo?');
  console.log(services);
}

console.log('TODOS', services);
