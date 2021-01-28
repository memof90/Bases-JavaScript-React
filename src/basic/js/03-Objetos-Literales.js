
/* Objetos Literales */
console.log('hello')

const Persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad:' new York',
        zip: 34343,
        lat: 14.3234,
        lng: 34.00404
    }
};

console.log(Persona)

// muestremelo en table
console.table(Persona);

// muestreme el nombre del objeto 
console.log({Persona})

// hacer una copia del objeto pero modificando 
// el objeto Principal
const Persona3 = Persona;
Persona3.nombre = 'Federico';

// copia del objeto para cambiar su valor 
// operador spreed ...
const persona2 = {...Persona}
persona2.nombre = 'Jaime';

console.log(Persona);
console.log(persona2);
console.log(`falso positivo cambie el nombre del objeto principal ${Persona3.nombre}`);


