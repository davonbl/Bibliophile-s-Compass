import { displayAllPlaces } from "./get-all-places.js";

export function filterByUsedBooks(locations){
    // debugger

    let returnFilterObj = locations.filter((bookstore) => {

        let testing = bookstore.categories

        let testingMap = testing.map((ele) => {
            return ele
        })

        let testingFilter = testingMap.filter((ele) => {
            if(ele.alias === 'usedbooks' || ele.title === 'Used Bookstore'){
                return 'usedbooks'
            }
        })
        let trueOrFalse = testingFilter.some( info => info.alias === 'usedBooks' || info.title === 'Used Bookstore' ) 
        // console.log('testing: ', testingFilter)
        // console.log('different function: ', trueOrFalse)

        return trueOrFalse; 
    })

    // console.log(returnFilterObj)
    let totalNumOfPlaces = JSON.parse(localStorage.getItem('totalNumOfPlaces'))
    displayAllPlaces(returnFilterObj, totalNumOfPlaces)
    // return returnFilterObj
}