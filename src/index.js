const person = {
  name: 'Rafael',
  lastname: 'Gallegos',
  age: 29,
  adreess: {
    city: 'Santa Cruz',
    town: 'El triunfo',
    zone: 'El palmar',
    uv: 174,
    mz: 14,
  },
};

const person2 = { ...person };
person2.name = 'Jose';

console.table(person);
console.table(person2);
