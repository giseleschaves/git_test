//document.addEventListener("click", computerPlay);


// Define random tool for player 2 (computer)
const tool = ["scissor", "paper", "rock"]

function randomTool() {
    let computerTool = Math.floor(Math.random() * 3)
    return tool[computerTool]
}

// let player2Tool = console.log(randomTool())

// Define who win 
let toolPlayer1 = ""
let toolPlayer2 = ""

function defineWinner(toolPlayer1, toolPlayer2) {
    let result = ""
    if (toolPlayer1 === toolPlayer2) 
        { result = "empate" } 
    else 
        { 
        switch (toolPlayer1) {
            case "scissor": 
               if (toolPlayer2 == "paper") {
                    result = "player 1 A"
                }
                else if (toolPlayer2 == "rock") {
                    result = "player 2 B"
                }
            break;
            case "paper":
                if (toolPlayer2 == "scissor") {
                    result = "player 2 C"
                }
                else if (toolPlayer2 == "rock") {
                    result = "player 1 D"
                }
            break;
            case "rock":
                if (toolPlayer2 == "paper") {
                    result = "player 2 E"
                }
                else if (toolPlayer2 == "scissor") {
                    result = "player 1 F"
                }
            break;
        }
    }
    return result
}

console.log(defineWinner("paper", "scissor"))


/*            
        else ( (toolPlayer1== "paper") && (toolPlayer2 == "scissor") )
            { if ( (toolPlayer1 == "paper") && (toolPlayer2 == "rock") ) 
                { console.log("player 1 won") }
                else 
                    { if ( (toolPlayer1 == "rock") && (toolPlayer2 == "paper") ) 
                       { console.log("player 1 won") }
                      else {
                          if ( (toolPlayer1 == "rock") && (toolPlayer2 == "scissor") )
                           { console.log("player 1 won") }
                          else {
                              if ( (toolPlayer1 == "scissor") && (toolPlayer2 == "rock") ) 
                                   { console.log("player 2 won") }
                               else { console.log("player 2 won")}
                           }    
                       }
                    }
                }
           }    
        }
    }
} */

defineWinner(toolPlayer1, toolPlayer2)
