document.addEventListener('DOMContentLoaded',()=>{
    
    const allCards = [
        {   name:'a',
            img:'images/i1.png'    
        },
        {   name:'b',
            img:'images/i2.png'    
        },
        {   name:'c',
            img:'images/i3.png'    
        },
        {   name:'d',
            img:'images/i4.png'    
        },
        {   name:'e',
            img:'images/i5.png'     
        },
        {   name:'f',
            img:'images/i6.png'    
        },
        {   name:'g',
            img:'images/i7.png'    
        },
        {   name:'h',
            img:'images/i8.png'    
        },
       

    ]

    const cardArray =  []
    for (let i=0; i < 30 ; i++){
        cardArray.push(
            allCards[Math.floor(Math.random()*8)]
        )

    }
   
    

    const grid =document.querySelector('.grid')
    const resultDisplay  = document.querySelector('#result')
    var cardsChosen =  []
    var cardsChosenId = []
    var cardsWon  = []


    let score  = resultDisplay.appendChild(document.createElement('text'))
    score.textContent = 0

    function createBoard(){
        for (let i=0;i <cardArray.length;i++){
            var card = document.createElement('img')
            card.setAttribute('src','images/blank.png')
            card.setAttribute('data-id',i)
            card.addEventListener('click',flipCard)
            grid.appendChild(card)
        }

    }


    function checkForMatch() {

        var cards =document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
       
        if (cardsChosen[0] ==cardsChosen[1] && cardsChosenId[0] != cardsChosenId[1] ){
            alert("you found a match")
            cards[optionOneId].setAttribute('src','images/sol.png')
            cards[optionTwoId].setAttribute('src','images/sol.png')
            cardsWon.push(cardsChosen) 
            cardsChosen =  []
            cardsChosenId = []
            score.textContent= parseFloat(score.textContent) + 1
        } else {
            cards[optionOneId].setAttribute('src','images/blank.png')
            cards[optionTwoId].setAttribute('src','images/blank.png')
            alert("try again")
            cardsChosen =  []
            cardsChosenId = []
           

        }
        
    }

    function flipCard() {

        var cardId = this.getAttribute('data-id')
       
        cardsChosen.push(cardArray[cardId].name)
        
        cardsChosenId.push(cardId)
        this.setAttribute('src',cardArray[cardId].img)
        if (cardsChosen.length == 2){
            setTimeout(checkForMatch,500)
        }

    }

    createBoard();



})