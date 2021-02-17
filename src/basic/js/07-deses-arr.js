
/* Destructuracion de Arreglos */
console.log('hello');


const personajes = ['Iroman', 'Thor', 'Capitan']

const [ , , p3] = personajes;

console.log(p3);

const retornaArreglo = () => {
    return ['ABC', 123]
}

const [letras, numeros] = retornaArreglo();

console.log(letras, numeros);

const usesState = (valor) => {
    return [valor, () => {console.log('hola Mundo')}];
}
const [nombre, setNombre] = usesState('Hulk');
console.log(nombre);
setNombre();


