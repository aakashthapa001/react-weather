var names = ['Aakash', 'Ajit', 'Janam'];

// names.forEach(function(name) {
//   console.log('forEach', name);
// });
//
// names.forEach ((name) => {
//   console.log('arrowFunction', name);
// });
//
// names.forEach((name) => console.log(name));

// var returnMe = (name) => name + '!';
// console.log(returnMe('Aakash'));
//
// var person = {
//   name: 'Aakash',
//   greet: function() {
//     names.forEach((name) => {
//       console.log(this.name + ' says hi to ' + name);
//     });
//   }
// };
//
// person.greet();


// Challenge area
function add(a, b) {
  return a + b;
}

console.log(add(1, 3));
console.log(add(0, 9));

// addStatement which uses arrow function with curly braces
var addStatement = (a, b) => {
    return a + b;
};
console.log('addStatement ' + addStatement(5, 20));
console.log('addStatement ' + addStatement(10, 90));

// addExpression which uses arrow function without curly braces
var addExpression = (a, b) => a + b;
console.log('addExpression ' + addExpression(15, 50));
console.log('addExpression ' + addExpression(100, 50));
