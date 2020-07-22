const { heroes } = require('./data/heroes');

const getHeroeById = (id) => heroes.find((heroe) => heroe.id === id);
const getHeroeByOwner = (owner) => heroes.filter((heroe) => heroe.owner === owner);

console.log(getHeroeById(2));
console.log(getHeroeByOwner('DC'));
