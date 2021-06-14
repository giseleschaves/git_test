console.log('Kia ora');
console.log(123);
console.log(true);
var greeting = "Hello";
console.log(greeting);
console.log([1,2,3,4,5,6]);
console.log({a:1 , b:2});

// show the console in table mode 
console.table({a:1 , b:2});
// creates a error a specific message
console.error('This is some error');

// clean the console
console.clear();

//creating warnings
console.warn('Warning is different');

/* shows time that is taken from the start hello to the end
can be interesting to compare distict implementations 
to know wich one is faster
*/
console.time('hello');
console.log('counting');
console.log('counting');
console.log('counting');
console.log('counting');
console.log('counting');
console.log('counting');
console.log('counting');
console.log('counting');
console.timeEnd('hello');
