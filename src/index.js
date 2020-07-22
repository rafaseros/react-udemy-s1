const saludar = (name) => `Hola: ${name}`;

const getUser = () => ({
  uid: 'ABC123',
  username: 'Doit',
});

const getCurrentUser = (name) => ({ uid: 'ACB123', userName: name });

console.log(saludar('Rafael'));
console.log(getUser());

const currentUser = getCurrentUser('Rafael');

console.log(currentUser);
