export class Passport {
    constructor(inputone, inputtwo) {
        console.log('new instance created')
        this.inputone = inputone
        this.inputtwo = inputtwo 
    }

    printFirstName() {
        return this.inputone
    }

    printLastName() {
        return this.inputtwo
    }

    printFullName() {
        return this.inputone + ' ' + this.inputtwo
    }

    printInitials() {
        return this.inputone[0] + '.' + this.inputtwo[0] + '.'
       
    }

    isNameVaild() {
        if (this.inputone.length > 1 && this.inputtwo.length > 1 && !this.inputtwo.endsWith('.')) {
            return 'Yes'
        } else {
            return 'No'
        }
    }
    
    reverseName() {
        return this.inputone.split('').reverse().join('') + ' ' + this.inputtwo.split('').reverse().join('')
    }
}
