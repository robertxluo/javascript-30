// start with strings, numbers and booleans
// let age = 100;
// let age2 = age;
// console.log(age, age2)
// age = 200;
// console.log(age, age2)

// let name = 'Wes';
// let name2 = name;
// name = 'wesley';
// console.log(name, name2);


// Let's say we have an array
const players = ['Ashe', 'Blitzcrank', 'Vladimir', 'Poppy'];

// and we want to make a copy of it.
const team = players;

// You might think we can just do something like this:
team[3] = 'Lux';

// however what happens when we update that array?
team.push('Zyra');

// now here is the problem!

// oh no - we have edited the original array too!
console.log(players);

// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!

// one way
const team2 = players.slice();

// or create a new array and concat the old one in
const team3 = [].concat(players);

// or use the new ES6 Spread
const team4 = [...players];

// now when we update it, the original one isn't changed
team4[3] = 'OMEGALUL'

// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
  name: 'Shauna Vayne',
  age: 23
};

// and think we make a copy:
const captain = person;
// captain.number = 99;

// how do we take a copy instead?
const captain2 = Object.assign({}, person, { number: 99, age: 12});
console.log(person);
console.log(captain2);


// We can make a copy with object spread now with ES6!
const captain3 = {...person};
captain3.age = 30;

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.