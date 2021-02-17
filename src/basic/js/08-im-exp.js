import  heores ,{nuevosHeroess} from '../../data/heroes';

console.log(nuevosHeroess);

/* Import export */
console.log('hello');

const getHeroeById = (id) => {
    return heores.find((heroe) => (heroe.id === id ));
}

console.log(getHeroeById(3));

const getHeoresByOwner = (owner) => {
    return heores.filter((heroe) => heroe.owner === owner);
}

console.log(getHeoresByOwner('Marvel'));




