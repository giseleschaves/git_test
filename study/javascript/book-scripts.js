/* Chapter 2 
// program 1
let figure = ""

for (let number = 0; number <=7; number ++) {
    figure = "#" + figure
    console.log(figure)
}
*/
/* 
// program 2
for (let number = 1; number <=100; number ++) {
    if (number%5 == 0) {
      console.log(number + "=> Buzzz")
    } 
    else if (number%3 == 0) {
      console.log(number + "=> Fizzz")
    } 
    else {
      console.log(number)
    } 
}
*/
/*
// programa 3

let charToPrint = ""
for (let line = 1; line <= 8; line++) {
  for (let col = 1; col <= 8; col++) {
    charToPrint = charToPrint + "# "
    if (col == 8) { // print the line
      if (line%2 == 0) { // space on the begin
        charToPrint = " " + charToPrint + '\r'
      } else // space on the end
      {
        charToPrint = charToPrint + " " + '\r'     
      }
      console.log(charToPrint )
      charToPrint = "" // clean the line
    }
  }
}
*/