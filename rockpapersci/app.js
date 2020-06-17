document.addEventListener('DOMContentLoaded',()=>{

    const rock_div = document.getElementById("r")
    const paper_div = document.getElementById("p")
    const sci_div = document.getElementById("s")
    const computer_score = document.getElementById("computer-score")
    const user_score = document.getElementById("player-score")
    const result_div = document.getElementById("result")

    const list = {"r" : "rock",  "p" : "paper" , "s" : "scissors" }

    getComputerChoice = () => {
        const choices = ["r","p","s"]
        id = Math.floor(Math.random()*3)
        return choices[id]

    }

    getWinner = (x,y) => {
        if (x=="r" && y == "p"){
            return [0,1]
        }
        if (y=="r" && x == "p"){
            return [1,0]
        }

        if (x=="r" && y == "r"){
            return [0,0]
        }
        if (x=="r" && y == "s"){
            return [1,0]
        }
        if (y=="r" && x == "s"){
            return [0,1]
        }
       
        if (x=="s" && y == "s"){
            return [0,0]
        }

        if (x=="s" && y == "r"){
            return  [0,1]
        }
        if (y=="s" && x == "r"){
            return  [1,0]
        }

        if (x=="s" && y == "p"){
            return  [1,0]
        }
        if (y=="s" && x == "p"){
            return  [0,1]
        }
        
        if (x=="p" && y == "p"){
            return [0,0]
        }
       

    }

    updateScore =  x  =>  {
        [u,c]  = x
        computer_score.textContent = parseFloat(computer_score.textContent) + c
        user_score.textContent = parseFloat(user_score.textContent) + u

    }

    updateText =  s  =>  {

        result_div.textContent =  s
    }

    updateByID  = id => {

        const c = getComputerChoice()
        const result  =  getWinner(id,c)
        updateScore(result)
        updateText(`Clicked on ${list[id]},  Computer picked ${list[c]}`)

    }



    rock_div.addEventListener('click',
        () => {
            updateByID("r")
        }
    
    )

    paper_div.addEventListener('click',
    () => {
        updateByID("p")
        
    }
    )

    sci_div.addEventListener('click', 
    () => {
        updateByID("s")
    }
    )


})


