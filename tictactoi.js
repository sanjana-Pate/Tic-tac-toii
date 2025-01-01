let btnn=document.querySelectorAll(".btn")
let reset=document.querySelector("#rese")
let turn0=true;
let newbt=document.querySelector("#re")
let msgcontai=document.querySelector(".msg-container")
let msgg=document.querySelector("#msg")
let count=0;


const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
const resetgame=()=>{
    turn0=true;
    enablebox();
    msgcontai.classList.add("hide");
}
const showWinner=(winner)=>{
    count=0;
    msgcontai.innerText=`Congratulation winner is ${winner}!!!`
    msgcontai.classList.remove("hide");
}
btnn.forEach((bt)=>{
    bt.addEventListener("click",()=>{
     
        console.log("box was clicked")
        if(turn0){
            bt.innerText="X"
            turn0=false;
            bt.classList.remove("btnnn")
            bt.classList.add("btn")
            count++;
        }
        else{
            bt.innerText="O"
            turn0=true;
            bt.classList.remove("btn")
            bt.classList.add("btnnn")
            count++;
        }
        bt.disabled=true;
        checkwinner();
                
        if(count==9){
            msgcontai.innerText=`Match is Draw`;
            msgcontai.classList.remove("hide");
            count=0;
        }
    })
});
const checkwinner=()=>{
    
    for(let Element of winpatterns ){
       let pos1=btnn[Element[0]].innerText
       let pos2=btnn[Element[1]].innerText
       let pos3=btnn[Element[2]].innerText

       if(pos1!="" && pos2!="" && pos3!="" )
       {
        if(pos1===pos2 && pos2===pos3)
        {
            console.log("Winner is",pos1);
            for (const bt of btnn ) {
                bt.disabled=true;
                
            }
            
            showWinner(pos1);
        }
       }
       
    }
}
const enablebox=()=>{
    for (const bt of btnn ) {
        bt.disabled=false;
        bt.innerText=" "
        
        
    }

}
newbt.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame);