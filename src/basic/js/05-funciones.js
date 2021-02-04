
/* Funciones */
console.log('hello');

function nombreOne(name) {
    return `Hola ${name}`;
}

const nombreTwo  = function(name) {
    return `Hola ${name}`;
}

/* Fucion flecha */

const nombreTree = (name) => {
    return `Hola ${name}`;
}

const nombreFour = (name) => `Hola ${name}`;


console.log(nombreOne('Gabriel'));
console.log(nombreTwo('Alex'));
console.log(nombreTree('Maria'));
console.log(nombreFour('Gilberto'));

/* Retornar Objetos funcion flecha*/
const getUser = () => ({
    uid: '123ABC',
    userName: 'El_Papi06'
});

const user = getUser();
console.log(user);

/* Ejercicio */
const getUsuarioActivo = (nombre) =>({
       uid: '123ABC',
        userName: nombre  
  });
        
     
       


const usuarioActivo = getUsuarioActivo('Maria');
console.log(usuarioActivo);





