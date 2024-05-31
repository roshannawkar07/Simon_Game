

// let gameSeq = [];
// let userSeq = [];

// let btns = ["yellow", "red", "purple", "green"];

// let started = false;
// let level = 0;

// let h2 = document.querySelector("h2");

// document.addEventListener("keypress", function() {
//    if (started == false){
//         console.log("Game Started");
//         started = true;
//         levelUp();  // Start the game and increase level on key press
//    }
// });

// function gameFlash(btn){
//     btn.classList.add("flash");
//     setTimeout(function () {
//         btn.classList.remove("flash");
//     }, 250);
// }

// function userFlash(btn){
//     btn.classList.add("userflash");
//     setTimeout(function () {
//         btn.classList.remove("userflash");
//     }, 250);
// }



// function levelUp(){
//     level++;
//     h2.innerText = `Level ${level}`;

//     //random btn choose
//     let randIdx = Math.floor(Math.random() * 4);  // Changed to 4
//     let randColor = btns[randIdx];
//     let randbtn = document.querySelector(`.${randColor}`);
//     gameSeq.push(randColor);
//     console.log(gameSeq);
//     gameFlash(randbtn);

// }

// function checkAns(){
//     // console.log("cuur level :", level);

//     let idx = level - 1;

//     if (userSeq[idx] === gameSeq[idx]) {
//         if (userSeq.length == gameSeq){
//             levelUp();
//         }
//     }else {
//         h2.innerText = `Game Over! press any kay to start!`;
//     }
// }

// function btnPress(){
//     console.log(this);
//     let btn = this;
//     userFlash(btn);

//     userColor = btn.getAttribute("id");
//     userSeq.push(userColor);
//     checkAns();
// }

// let allBtns = document.querySelectorAll(".btn");
// for ( btn of allBtns){  // Changed to iterate over allBtns
//     btn.addEventListener("click", btnPress);
// }


let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function() {
   if (started == false){
        console.log("Game Started");
        started = true;
        levelUp();  // Start the game and increase level on key press
   }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 250);
}

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText = `Level ${level}`;

    //random btn choose
    let randIdx = Math.floor(Math.random() * 4);  // Changed to 4
    let randColor = btns[randIdx];
    let randbtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
   console.log(gameSeq);
    gameFlash(randbtn);

    userSeq = [];  // Reset user sequence for new level
}

function checkAns(idx){
    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length === gameSeq.length){  // Corrected the comparison
            setTimeout(levelUp,1000);
        }
    } else {
        h2.innerHTML = `Game Over! Your score was <b>${level}</b> <br> press any key to start!`;  // Corrected the typo
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        reset();

    }
}

function btnPress(){
    let btn = this;
    userFlash(btn);

    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for (let btn of allBtns){  // Changed to iterate over allBtns
    btn.addEventListener("click", btnPress);
}


function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}