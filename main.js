// all the questions and answers saved in my array
let arr =
    [
        {
            question: "A. Is CSS programming language?",
            answer1: "1. Yes",
            answer2: "2. No",
            correct: "2"
        },
        {
            question: "A. Is JS programming language?",
            answer1: "1. Yes, it is",
            answer2: "2. No, it is not",
            correct: "1"
        }
    ]
// creating random number to choose from my array a random question
function randomNumberFun() {
    let rand = parseInt(Math.random() * 2);
    return rand;
}

let level = 0;
function play(arr, fun) {

    let randomNumber = fun()
    console.log(arr[randomNumber].question)
    console.log(arr[randomNumber].answer1)
    console.log(arr[randomNumber].answer2)

    // letting the user to answer the random question
    let userAnswer = prompt("choose one of the answers:")
    if (userAnswer.toLowerCase() === "exit") {
        return;
    } else {
        if (userAnswer === arr[randomNumber].correct) {
            level++;
            console.log("your answer is correct")
            console.log("your level is: " + level)
            play(arr, randomNumberFun)
        } else {
            console.log("Unfortuantly, your answer is not correct")
            console.log("your level is: " + level)
            play(arr, randomNumberFun)
        }
    }
}

 play(arr, randomNumberFun)



