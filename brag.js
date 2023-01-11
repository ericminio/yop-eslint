const name = 'James';

const person = {
    first: name,
    adress: { name: 'far', numbers: [ 1, 2, 3 ] }
};

console.log(person);

const sayHelloLinting = (fName) => {
    console.log(`Hello linting, ${fName}`);
};

sayHelloLinting('Max');
