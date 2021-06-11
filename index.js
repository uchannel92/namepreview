import { Passport } from "./passport.js";

let inputone = document.querySelector('#inputFirstName')
let inputtwo = document.querySelector('#inputLastName')

let answer1 = document.querySelector('#answer1')
let answer2 = document.querySelector('#answer2')
let answer3 = document.querySelector('#answer3')
let answer4 = document.querySelector('#answer4')
let answer5 = document.querySelector('#answer5')
let answer6 = document.querySelector('#answer6')

function doSomething() {
    let passport = new Passport(inputone.value, inputtwo.value)
    // console.log(passport)

    answer1.textContent = passport.printFirstName()
    answer2.textContent = passport.printLastName()
    answer3.textContent = passport.printFullName()
    answer4.textContent = passport.printInitials()
    answer5.textContent = passport.isNameVaild()
    answer6.textContent = passport.reverseName()
}

inputone.addEventListener('input', doSomething)
inputtwo.addEventListener('input', doSomething)

