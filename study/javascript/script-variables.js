/* 
Why using the modern javascript is better to use let and const 
instead var?
*/

var name = 'Gisele Chaves';
console.log(name);
name = 'Elis Regina';
console.log(name);

// init var
var greeting;
console.log(greeting);
greeting = 'hello';
console.log(greeting);

/* conventionals about variables letters, numbers _ and $
 but a variable cannot start with a number 
 
 _varname is more used as global variables in frameworks, so avoid used it
 
 */

 // formats for creating variables
 var firstClientName = 'Maria'; //CamelCase format
 var first_client_name = 'Maria'; // Underscore format
  var FirstClientName = 'Maria'; // Pascal case - more my ages :-)))
/* Pascal case is more suggested Object Oriented Programming
to create classes, constructors functions for exemaple */

// CONSTANT 
const nativeFrom = 'Brazil';
console.log(nativeFrom);
/*  Important
 -> const secondNationality;
 cannot declare const without value because const cannot be reassign
 error - Missing initializer is const declaration
 */

const person = {
    name: 'Maria',
    age: 42
}

person.name = 'Gisele'; // change the content of the object
person.gender = "female"; // add a property

console.log(person);
/* but cannot reassign a constant object
   for example -> person = {name: 'Gisele', age: 42, gender:'female'};
*/

/* Let, Const and Var what is the difference */

/* Constant are not real constant, beause it is no about does not change the value

Const defined as array, objects and other type of data there is 
not primitives
These types of data can be changed and this creates the idea 
that the constant is assigned with a new value, but is not. 
*/

// Block scope X Function scope
/* constant and let are block scoped - so the variable only existis inside of this block of code
   for example inside a loop or a if statement.
   var is function scope
*/

if (true) {
    var varVariable = 'This is true';
}
console.log(varVariable);

if(true) {
    let letVariable = 'This is true';
    console.log(letVariable);
}
console.log(letVariable); // it will show as not defined because is out of the block

// Var can be redeclared and let no
if (true) {
    var varVariable = 'This is true';
}

var varVariable = 'This is false'; // it works because you can reassign var
let letVariable = 'true';
let letVariable = 'false'; // error, because letVariable has already been declared

// Variable can be used before been declared
console.log(varVariable2);

//var varVariable2 = true;

