export class Passport {
    constructor(inputone, inputtwo) {
        console.log('new instance created')
        this.inputone = inputone
        this.inputtwo = inputtwo 
        // console.log(inputone)
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

    printInitials(first = '', last = '') {
        if (this.inputone === '' || this.inputtwo === '') {
            return 'enter a first and last name!'   
        } else {
            return this.inputone[0].toUpperCase() + '.' + this.inputtwo[0].toUpperCase() + '.' 
        }
        // if (this.inputone === 'undefined' || this.inputtwo === 'undefined') {
        //     this.inputone = first
        //     this.inputtwo = last
        //     return first[0] + '.' + last[0] + '.'
        // } else {
        //     return this.inputone[0] + '.' + this.inputtwo[0] + '.'
        // }
       
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
