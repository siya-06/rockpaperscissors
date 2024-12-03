let userscore=0;
let compscore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userscorepara=document.querySelector("#userscore");
const compscorepara=document.querySelector("#compscore");
const gencompchoice =()=> {
    const options=["rock","paper","scissors"];
    const ranindx=Math.floor(Math.random()*3);
    return options[ranindx];
};

const drawgame =()=>{
 
msg.innerText ="GAME DRAW";
msg.style.backgroundColor="black";
};

const showwinner =(userwin,userchoiceid,compchoice)=>{
    if(userwin){
        userscore++;
        userscorepara.innerText=userscore;
        
        msg.innerText =`YOU WIN  your ${userchoiceid} beats ${compchoice}`;
        msg.style.backgroundColor="green";

    }else{
        compscore++;
        compscorepara.innerText=compscore;
       
        msg.innerText =`YOU LOSE  ${compchoice} beats your ${userchoiceid}`;
        msg.style.backgroundColor ="red";
    }

};
const playgame = (userchoiceid) =>{
       console.log(`user's choice is ${userchoiceid}`);
       const compchoice= gencompchoice();
       console.log(`comp choice is ${compchoice}`);

    if (userchoiceid===compchoice){
        drawgame();
    }else{
        let userwin =true;
        if(userchoiceid==="rock"){
            userwin= compchoice==="paper" ? false:true;
        }
        else if(userchoiceid==="paper"){
            userwin = compchoice=== "scissors"? false:true;

        }
        else{
            userwin = compchoice === "rock" ? false : true;
        }
        showwinner(userwin,userchoiceid,compchoice);
    }

};
    
    
choices.forEach((choice) =>{
    choice.addEventListener("click",() => {
        const userchoiceid=choice.getAttribute("id");
        
        playgame(userchoiceid);
    })

});