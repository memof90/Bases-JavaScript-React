/* Promesas */

import { getHeroeById } from "./08-im-exp";

console.log('hola mundo');


// Promesas son asyncronas

// const promesa = new Promise((resolve, reject) => {
//     // resolve exito reject fracaso
//     setTimeout(() => {
//         const heroe = getHeroeById(2);
//         resolve(heroe);
//     }, 2000);
// });

// promesa.then((heroe) => {
//     console.log(heroe);
// })
// .catch(err => console.log(err));

const getHeroeByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        // resolve exito reject fracaso
        setTimeout(() => {
            const heroe = getHeroeById(id);
            if (heroe) {
                resolve(heroe);
            } else {
                reject('No se pudo encontrar el heroe');
            }
        }, 2000);
    });

    // return promesa;
}

getHeroeByIdAsync(2).then((heroe) => console.log(heroe))
.catch((err) => console.log(err));
