let firstNum = document.querySelector(".first-num");
let secondNum = document.querySelector(".second-num");
let yourResult = document.querySelector(".eval-expression");
let checkBtn = document.querySelector(".btn");
let correct = document.querySelector(".correct-answer");
let wrong = document.querySelector(".wrong-answer");

// generate random numbers
let randomFirstNum = Math.floor(Math.random() * 100);
let randomSecondNum = Math.floor(Math.random() * 100);

// append random numbers
firstNum.textContent = randomFirstNum;
secondNum.textContent = randomSecondNum;
let result = eval("+firstNum.textContent + +secondNum.textContent");

checkBtn.addEventListener("click", function(){
    if(yourResult.value === ""){
        alert("Input your answer");
    }else if(+yourResult.value === result){
        correct.style.display = "block"
    }else{
        wrong.textContent = `Wrong answer! The answer was ${result}`
        wrong.style.display = 'block'
    }
    setTimeout(() => {
        window.location.reload(true);
    }, 2000);
    
})
