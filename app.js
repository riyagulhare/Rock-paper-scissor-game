let userscore = 0;
let compscore = 0;
let userscore_span = document.getElementById("user-score");
let compscore_span = document.getElementById("comp-score");
let scoreboard_div = document.querySelector(".score-board");
let result_div = document.querySelector(".result > p");
let rock_div = document.getElementById("r");
let paper_div = document.getElementById("p");
let scissor_div = document.getElementById("s");

function main() {
    rock_div.addEventListener('click', function() {
     game("r");
  })
     paper_div.addEventListener('click', function() {
     game("p");
     })
     scissor_div.addEventListener('click', function() {
     game("s");
     })
 }
  main();


 function getcompchoice() {
     const choices = ['r', 'p', 's'];
     const randomnumber = Math.floor(Math.random() * 3);
     return choices[randomnumber];
 }

 function game(userchoice) {
     
    let compchoice = getcompchoice(); 
     switch (userchoice + compchoice) {
         case "rs":
         case  "pr":
         case "sp":
             win(userchoice, compchoice);
             break;
         case "sr":
         case "rp":
        case "ps":
             lose(userchoice,compchoice);
             break;
         case "rr":
         case "pp":
         case "ss":
            draw(userchoice, compchoice);
            break;                          
     }
     }

 function win(userchoice, compchoice){
    userscore++;
    userscore_span.innerHTML = userscore;
    compscore_span.innerHTML = compscore;
    const usersmallword = "user".fontsize(3).sub();
    const compsmallword = "comp".fontsize(3).sub();
    result_div.innerHTML = `${converttoword(userchoice)}${usersmallword}  beats ${converttoword(compchoice)}${compsmallword}. You Win!`;
    document.getElementById(userchoice).classList.add('green-glow');
    setTimeout(function() {document.getElementById(userchoice).classList.remove('green-glow') }, 1000);
}
function lose(userchoice, compchoice){
      compscore++;
    userscore_span.innerHTML = userscore;
    compscore_span.innerHTML = compscore;
    const usersmallword = "user".fontsize(3).sub();
    const compsmallword = "comp".fontsize(3).sub();
    result_div.innerHTML = `${converttoword(userchoice)}${usersmallword}  loses to ${converttoword(compchoice)}${compsmallword}. You Lost!`;
    document.getElementById(userchoice).classList.add('red-glow');
    setTimeout(function() {document.getElementById(userchoice).classList.remove('red-glow') }, 1000);
}
function draw(userchoice, compchoice) {
    const usersmallword = "user".fontsize(3).sub();
    const compsmallword = "comp".fontsize(3).sub();
    result_div.innerHTML = `${converttoword(userchoice)}${usersmallword}  equals ${converttoword(compchoice)}${compsmallword}. Its A Draw`;
    document.getElementById(userchoice).classList.add('grey-glow');
    setTimeout(function() {document.getElementById(userchoice).classList.remove('grey-glow') }, 1000);
}

 function converttoword(letter) {
     if(letter === 'r') return "Rock";
     if(letter === 'p') return "Paper";
      return "Scissor";
 }


 