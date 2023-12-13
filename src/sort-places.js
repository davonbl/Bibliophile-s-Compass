import { displayAllPlaces } from "./yelp-api.js"


export function sortByAlphabeticalOrder(locations){

    let sort = locations.slice().sort((a, b) => {
        let alphabet = 'abcdefghijklmnopqrstuvwxyz'

        /* It is not a good idea to re-assigned parameter/argument variables, but to reference it 
            to get the value stored in a variable. Or you will get the error mentioned in the conditional
            block of code 
        */
        //  a = alphabet.indexOf(a.name[0].toLowerCase())
        //  b = alphabet.indexOf(b.name[0].toLowerCase())
        let a0 = alphabet.indexOf(a.name[0].toLowerCase())
        let b0 = alphabet.indexOf(b.name[0].toLowerCase())

        if(a0 === b0){
            /*
            The line of code below cause an error: 
            "Uncaught TypeError: Cannot read properties of undefined (reading '1')"
            */
            // let a2 = alphabet.indexOf(a.name[1].toLowerCase())
            // let b2 = alphabet.indexOf(b.name[1].toLowerCase())

            let a2 = alphabet.indexOf(a.name[1].toLowerCase())
            let b2 = alphabet.indexOf(b.name[1].toLowerCase())
            return a2 - b2
        }else{

            return a0 - b0
        }        
    })
    displayAllPlaces(sort)
    // return sort
}