/*
2. select the elements with the ids
modal
open-modal-btn
overlay */

const modal = document.querySelector("#modal")
const openButton = document.querySelector("#open-modal-btn")
const closeButton = document.querySelector("#close-modal-btn")

const overlay = document.querySelector("#overlay")

/* create a click event listener for the open modal btn that adds 
the class "open" to the overlay */
openButton.addEventListener("click", () => {
    modal.classList.add("open")
    overlay.classList.add("open")
} )

/* create a click event listener for the close-modal-btn that remove 
the class "open" from the modal
also add the class "open" to the overlay */
closeButton.addEventListener("click", closeModal)
/* create a click event listener to te overlay that removes the class "open"
from the modal overlay
*/

overlay.addEventListener("click", closeModal)

function closeModal() {
    modal.classList.remove("open")
    overlay.classList.remove("open")
}
