document.addEventListener('DOMContentLoaded',()=> {
    const grid = document.querySelector('.grid')
    let squares = Array.from(document.querySelectorAll('.grid div'))
    console.log(squares)

    const width = 10

    document.addEventListener('keyup',control)

    const lTetron = 
        [[1,width+1,width*2+1,2],
        [width,width+1,width+2,width*2+2],
        [1,width+1,width*2+1,width*2],
        [width,width*2,width*2+1,width*2+2]
    ]
    
    let currentPosition =10
    let current = lTetron[0]
    
    function draw(){

        current.forEach(index => {
            squares[currentPosition+index].classList.add('tetron')
        })
    }


    function control(e){
        if (e.keyCode == 37){
            moveLeft()
        }
        if (e.keyCode == 39){
            moveRight()
        }


    }

    function moveLeft(){
        undraw()
        currentPosition-= 1
        draw()
    }

    function moveRight(){
        undraw()
        currentPosition+= 1
        draw()
    }


    function undraw(){

        current.forEach(index => {
            squares[currentPosition+index].classList.remove('tetron')
        })
    }

    timerId=setInterval(moveDown,1000)


    function moveDown(){
        undraw()
        currentPosition+= width
        draw()

    }

    /*
    function freeze(){
        if (current.some(index => squares[currentPosition + index+width].classList.contains('taken')))
        {
            squares.classList.remove('tetron')
        }


    }
    */
    

})