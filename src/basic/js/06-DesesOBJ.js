
/* Destructuracion de Objetos */
console.log('hello');

const Avengers = {
    nombre: 'tony',
    edad: 50,
    poder: 'traje'
}

console.log(Avengers);

// console.log(Avengers.name);

// console.log(Avengers.edad);

// console.log(Avengers.poder);

/* Desetructuracion  */
// renombrar nombre:nombre2
const {nombre,edad, poder} = Avengers;

console.log(nombre);
console.log(edad);
console.log(poder);

/* Desetructuracion en argumento */

const NuevoAvengers = {
    nombre: 'Tor',
    edad: 1000,
    poder: 'Rayo',
    clave: 'dios'
}
console.log(NuevoAvengers);

const nuevoAvenger = ({nombre, edad, poder, arma = 'martillo', clave}) => ({
    nombreClave: clave,
    anios: edad,
    latlng: {
        lat: 14.1234,
        lng: -12.747
    }

});
    // console.log(nombre, edad, poder, arma);

const {nombreClave, anios, latlng:{lat,lng}} = nuevoAvenger(NuevoAvengers);
console.log(nombreClave, anios);


    /* PRIMERA FORMA */

// const NuevoHeroe = nuevoAvenger(NuevoAvengers);
// console.log(NuevoHeroe);

// /* Desestruturar */

// const {nombreClave, anios} = NuevoHeroe;

// console.log(nombreClave);
// console.log(anios);

/* Estraer Objetos Anidados */
/* console.log( latlng:{lat,lng}) */
console.log(lat,lng);




