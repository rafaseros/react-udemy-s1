const Person = {
  name: 'Rafael',
  age: 29,
  alias: 'Seros',
};

const { name, age, password } = Person;

console.log(name, age, password);

const getNameFromPerson = ({ age, alias }) => {
  return {
    superName: alias,
    timeOfLife: age,
    latlng: {
      lat: 14.12312,
      lng: -12.12312,
    },
  };
};

const {
  superName,
  timeOfLife,
  latlng: { lat, lng },
} = getNameFromPerson(Person);

console.log(superName, timeOfLife);
console.log(lat, lng);
