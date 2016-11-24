// // Async Callback Example
// function getTempCallback(location, callback) {
//   callback(undefined, 78);
//   callback('City not found');
// }
//
// getTempCallback('Kathmandu', function(err, temp) {
//   if(err) {
//     console.log('error', err);
//   } else {
//     console.log('success', temp);
//   }
// });
//
// // Promises Example
// function getTempPromise(location) {
//   return new Promise(function(resolve, reject) {
//     setTimeout(function() {
//       resolve(79);
//       reject('City not found');
//     }, 1000);
//   });
// }
//
// getTempPromise('Kathmandu').then(function(temp){
//   console.log('promise success', temp);
// }, function(err) {
//   console.log('promise error', err);
// });


// Challenges Area
// Challenge One to use promise and get sum of two numbers

function addPromise(a, b){
  return new Promise(function(resolve, reject) {
    setTimeout(function(){
      if(typeof a === 'number' && typeof b === 'number') {
        resolve(a + b);
      } else {
        reject('a & b must be a number');
      }
    }, 1000);
  });
}

addPromise(2, 3).then(function(sum) {
  console.log('success', sum);
}, function(err) {
  console.log('error', err);
});

addPromise('aakash', 3).then(function(sum) {
  console.log('This should not show up');
}, function(err) {
  console.log('This should appear', err);
});
