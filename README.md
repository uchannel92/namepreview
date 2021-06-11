Name Preview.JS ReadMe

I've created two jsx docs. One for index, second for passport.js

The passport.js contains the class Passport.
The constructor with class Passport accepts two parameters, one for the firstname input, the second for the lastname input.

I have then created two instance variables from these parameters. These two instance variables will allow me to create instance methods on them.
this.inputone
this.inputtwo

Back in index.js i have created a function called doSomething(). This accepts a variable called passport which creates a new class instance, which is fed into the Passport class.

This new instance has two parameters , the value of inputone (firstname) and the value of inputtwo (lastname).
i.e. inputone.value

On my HTML doc, I have then created 5 variables which coincide with the answers from the user input:
answer1 - firstname
answer2 - lastname
answer3 - fullname
answer4 - intials
answer5 - isNameValid

On the inputone & inputtwo variables, i have created the 'input' event listener which calls the same function (doSomething) which assigns the instance method called on the passport instance.
i.e. answer1.textContent = passport.PrintFirstName()

Then data from these inputs are passed into the class instance variables.

I am then able to call these instance methods of the passport new instance, which will append this information onto the page.

Issues Faced:

Because of the input event listener, if either the firstname/lastname input is left empty while the opposite is filled in, javascript will show an undefined error message for this input.

This is happening because the printInitials() instant method is automatically trying to find the first index for a variable that has not been entered yet.
My solution for now was to add a conditional statement much like the isNameValid() method which will only fire if both inputs have more a string length of 1.
