const rxjs = require('rxjs');
const { of, Observable } = rxjs;

const foo = new Observable((subscriber) => {
  console.log('Hello');
  subscriber.next(42);
  subscriber.next(100);
  subscriber.next(200);
  setTimeout(() => {
    subscriber.next(300); // happens asynchronously
  }, 1000);
});
// foo.subscribe((x) => {
//   console.log(x);
// });
// foo.subscribe((y) => {
//   console.log(y);
// });

// function foo() {
//   console.log('Hello');
//   return 42;
// }

console.log('before');
foo.subscribe((x) => {
  console.log(x);
});
console.log('after');
