import { preguntar } from './lib/consola.ts';

let tarjetaTexto: string = preguntar('Ingresá el número de tarjeta: ');
let tamañoPrefijo: string = preguntar('Ingrese el tamaño de su prefijo: ');
let red: string = 'Tarjeta invalida';

function obtenerPrefijo(numero: number, tamañoPrefijo: number): number {
  return Math.floor(numero / 10 ** (16 - tamañoPrefijo));
}

if (Number(tamañoPrefijo) === 2) {
  if (
    obtenerPrefijo(Number(tarjetaTexto), Number(tamañoPrefijo)) === 34 ||
    obtenerPrefijo(Number(tarjetaTexto), Number(tamañoPrefijo)) === 37
  ) {
    red = 'American Express';
  } else if (
    obtenerPrefijo(Number(tarjetaTexto), Number(tamañoPrefijo)) === 51 ||
    obtenerPrefijo(Number(tarjetaTexto), Number(tamañoPrefijo)) === 52 ||
    obtenerPrefijo(Number(tarjetaTexto), Number(tamañoPrefijo)) === 53 ||
    obtenerPrefijo(Number(tarjetaTexto), Number(tamañoPrefijo)) === 54 ||
    obtenerPrefijo(Number(tarjetaTexto), Number(tamañoPrefijo)) === 55
  ) {
    red = 'Mastercard';
  }
} else if (Number(tamañoPrefijo) === 1) {
  if (obtenerPrefijo(Number(tarjetaTexto), Number(tamañoPrefijo)) === 4) {
    red = 'Visa';
  }
}

console.log(red);
