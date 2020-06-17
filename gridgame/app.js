document.addEventListener('DOMContentLoaded', () => {
   
    //let grid = Array.from(document.querySelectorAll('.grid div'))
    
    let button = document.getElementById("myButton")

    const grid = document.getElementById("mygrid")
    const gridsize = 200

    for (let i=0;i <gridsize;i++){
        let gridelement = document.createElement('div')
        grid.appendChild(gridelement)
    }
    console.log(Array.from(grid.children))
    button.addEventListener('click' ,  () => {

        grid[3].classList.add('.selected')
        console.log("clicked")
    })  
    
    Array.from(grid.children).forEach( i =>  
        i.addEventListener('click', () => {
            if (i.classList.contains('selected')){
                i.classList.remove('selected')
            }
            else 
            {
                i.classList.add('selected')
            }


        })
        

    )




   

})