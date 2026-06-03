import { preguntar } from './lib/consola.ts';

let tarjetaTexto: string = preguntar('Ingresá el número de tarjeta: ');
let tamañoPrefijo: string = preguntar('Ingrese el tamaño de su prefijo: ');
let red: string = "";

function obtenerPrefijo(numero: number, tamañoPrefijo: number): number {
  return numero / 10 ** (16 - tamañoPrefijo);
}

if (Number(tamañoPrefijo) === 2) {
  if (obtenerPrefijo(Number(tarjetaTexto), Number(tamañoPrefijo)) === 34 
   || obtenerPrefijo(Number(tarjetaTexto), Number(tamañoPrefijo)) === 37) {
    red = "American Express";
  }
}

console.log(red);