const boxes =document.querySelectorAll(".box")
const status=document.querySelector(".game-status")
const btn=document.querySelector(".btn")
const winCondition=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

let spaces=["","","","","" ,"" ,"" ,"" ,"" ]
let currentPlayer='X'
let running=false

const startGame=()=>{
    boxes.forEach((box)=>{
        box.addEventListener('click',boxClicked)
        running=true
    })

}
startGame()
function boxClicked(e){
    if (running){
        const id=e.target.id

        if (!spaces[id]){
            spaces[id]=currentPlayer
            e.target.innerText=currentPlayer
            if (playerHasWon()){
                status.innerText=`${currentPlayer} has won`
                let winning_boxes=playerHasWon()

    
                for (const box of winning_boxes){
                    
                    boxes[box].style.backgroundColor="rgba(100,100,100,0.3)"
                }
            }
            else{
                isThereASpace=false
                for (const item of spaces){
                    if (item==""){
                        isThereASpace=true
                        break
                    }
                }
                if (!isThereASpace){
                    status.innerText="It's a draw"
                }
            }

            if (currentPlayer=="X"){
                currentPlayer="O"
            }else{
                currentPlayer="X"
            }
        
        }

    }
    
    
}

function playerHasWon(){
    for (const condition of winCondition){
        a=condition[0]
        b=condition[1]
        c=condition[2]

        if (spaces[a] &&(spaces[a]==spaces[b] && spaces[b] ==spaces[c])){
            running=false
            return [a,b,c]
        }

       
    }
    return false
}
btn.addEventListener('click',()=>{
    boxes.forEach(box=>{
        box.innerText=""
        box.style.backgroundColor="#fff"
    })
    spaces.fill("")
    currentPlayer="X"
    status.innerText=''
    running=true
    
})
