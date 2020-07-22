const character = ['a', 'b', 'c'];

const [, , ch3] = character;

console.log(ch3);

const returnArray = () => {
  return ['ABC', 123];
};

const [string, number] = returnArray();

console.log(string, number);

const setState = (valor) => {
  return [
    valor,
    () => {
      console.log('hola mundo');
    }
  ];
};

const [nombre, saludar] = setState('Rafael');

console.log(nombre);

saludar();
