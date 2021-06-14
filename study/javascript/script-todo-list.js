//1. Select all elements with id uses #, with class uses []
const form = document.querySelector("#new-item-form")
const list = document.querySelector("#list")
const input = document.querySelector("#item-input")

//2. When I sub,mit the form add the new element

form.addEventListener("submit", e=>  { // takes a argumrent as the "e" event to the function
    e.preventDefault() // prevent the default behaviour of submit form that is to reload the page
    console.log(input.value)

    //1. Create a new item
    const item = document.createElement("div")
    item.innerText = input.value
    item.classList.add("list-item")

    //2. add that item to the list
    list.appendChild(item)

    //3. clear the input
    input.value = ""
    //4. set up event listener to delete item when clicked
    item.addEventListener("click", () => { //does not have an argument, like "e" because does not need it
        item.remove()
    })


})