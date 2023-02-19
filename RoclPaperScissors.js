let w = ['Rock', 'Paper', 'Scissors']


let nm=0
win=0
while(nm<5){
    let number = Math.floor(Math.random() * w.length)
let wrd= w[number]
console.log(wrd)
    let inp=prompt("Rock, Paper or Scissors?")
    console.log(inp)
    if(wrd==inp){
        alert("Drawn")
    }
    else if(wrd=="Paper"){
        if(inp=="Scissors"){
            alert("Win")
            win++
        }
        else if(inp="Rock"){
            alert("Lose")
        }
    }
    else if(wrd=="Rock"){
        if(inp=="Paper"){
            alert("Win")
            win++
        }
        else if(inp="Scisoors"){
            alert("Lose")
        }
    }
    else if(wrd=="Scissors"){
        if(inp=="Rock"){
            alert("Win")
            win++
        }
        else if(inp="Paper"){
            alert("Lose")
        }
    }
    
       
    nm++
}
alert("End of the Game. Thanks for playing")
alert("Your score is "+ win)
