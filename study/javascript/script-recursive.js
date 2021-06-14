
const person = {
    name: "Gisele",
    friend: {
        name: "Cleyde",
        friend: {
            name: "Ana",
            friend: {
                name: "Rafael"
            }
        }
    }
}

function printFriends(currentPerson){
    if (currentPerson == null) return
    console.log(currentPerson.name)
    printFriends(currentPerson.friend)
} 

printFriends(person)