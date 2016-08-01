// var names = ['Kevin', 'Natsuki', 'Helaine'];
//
// names.forEach(function (name) {
//   console.log('forEach', name);
// });
//
// names.forEach((name) => {
//   console.log('arrowFunc', name);
// });
//
// names.forEach((name) => console.log(name));

// var returnMe = (name) => name + '!';
// console.log(returnMe('Kevin'));

// var person = {
//   name: 'Kevin',
//   greet: function () {
//     names.forEach((name) => {
//       console.log(this.name + ' says hi to ' + name)
//     });
//   }
// };
//
// person.greet();

// Challenge Area
function add (a, b) {
  return a + b;
};

// addStatement (curly braces)
var addStatement = (a, b) => {
  return a + b;
}
console.log(addStatement(4, 7));

// addExpression (one line)
var addExpression = (a, b) => a + b;
console.log(addExpression(3, 3));

// console.log(add(1, 3));
// console.log(add(9, 0));

// create 2 diff arrow functions
// one uses curly braces
// one uses arrow function on one line
