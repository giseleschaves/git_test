
/*
//select only one element, the first find
const dataAttributeElement = document.querySelector('[data-test]')
// select all elements, this return a node of elements
const divWithClasses = document.querySelectorAll(".div-class")
const input = document.querySelector("input")

console.log(dataAttributeElement)

console.log(divWithClasses)

console.log(input)

// foraEach method exists in Node but to use other methos is better to transforma in an Array
divWithClasses.forEach(div => (div.style.color = "red"))

// change to array
Array.from(divWithClasses)
*/

//const btn = document.querySelector("[data-btn]")
const link = document.querySelector("[data-link]")

link.addEventListener("click", e => {
    e.preventDefault() // dont reload the page that is the default 
    console.log("link clicked")
} )

/*
input.addEventListener("input", e => {
    console.log(e.target.value === "")
})

//btn.addEventListener("click", e => {
//    console.log(e)
//})
*/

