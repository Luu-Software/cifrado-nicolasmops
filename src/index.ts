import { preguntar } from './lib/consola.ts';
import { cifrar, descifrar } from './lib/funcionesCriptográficas.ts';

let palabra: string = preguntar('Ingrese su palabra: '); 
let claveTexto: string = preguntar('Ingrese su clave:  '); 
let accion: string = preguntar('Desea descifrar o cifrar: ');

let resultado: string = '';

if (accion === 'cifrar' || accion === 'Cifrar' ){   
    resultado = cifrar(palabra, Number(claveTexto));
    console.log('La palabra es: ' + resultado);

    }
else if(accion === 'descifrar' || accion === 'Descifrar'){
    resultado = descifrar(palabra, Number(claveTexto));
    console.log('La palabra es: ' + resultado);
}
else{
    console.log('Ingresar una accion válida.')

}
