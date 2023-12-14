import { yelpApi } from "./yelp-api.js"
import { displayAllPlaces } from "./get-all-places.js"
import { filterByUsedBooks } from "./filter-places.js"
import { sortByAlphabeticalOrder } from "./sort-places.js"




document.querySelector('#sortBtn').addEventListener('click', async() => {
    let getValue = await yelpApi()
    // initMap(null)
    sortByAlphabeticalOrder(getValue)
})

document.querySelector('#filterBtn1').addEventListener('click', async() => {
    let getValue = await yelpApi()
    // initMap(null)
    filterByUsedBooks(getValue)
})

document.querySelector('#filterBtn2').addEventListener('click', async() => {
    let getValue = await yelpApi()
    // initMap(null)
    displayAllPlaces(getValue)
})