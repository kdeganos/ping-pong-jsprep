// var pingPong = require('./ping-pong.js').pingPong;
//
// console.log('Ping-ponging up to 100!');
// var result = pingPong(100);
// result.forEach(function(element) {
//   console.log(element);
// });

var goal = prompt('What number would you like me to ping-pong up to?');
var result = pingPong(goal);
result.forEach(function(element) {
  console.log(element);
});
