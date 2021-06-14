const startTime = new Date()

loginWithTime("Start HTML Parse")

window.addEventListener("load", () => {
    loginWithTime("Document Rendered")
})

function loginWithTime(message) {
    console.log(new Date() - startTime + "ms - " +
      message)
}