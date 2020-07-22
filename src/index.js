import { getHeroeById } from './utils/findHeroes';

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const heroe = getHeroeById(2);
//     resolve(heroe);
//     reject('No se puedo encontrar el heroe');
//   }, 2000);
// });

// promise
//   .then((heroe) => {
//     console.log(heroe);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const getHeroeByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const heroe = getHeroeById(id);
      if (heroe) {
        resolve(heroe);
      } else {
        reject('No se puedo encontrar el heroe');
      }
    }, 2000);
  });
};

getHeroeByIdAsync(1).then(console.log).catch(console.warn);
