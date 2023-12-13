import './style.css';
import { yelpApi, filterByCity, displayAllPlaces } from './src/yelp-api.js';
import { filterByUsedBooks } from './src/filter-places.js';
import { sortByAlphabeticalOrder } from './src/sort-places.js';


let getValue = await yelpApi()

// console.log(filterByUsedBooks(getValue))
// console.log(sortByAlphabeticalOrder(getValue))


//This works great
// displayAllPlaces(getValue)
// sortByAlphabeticalOrder(getValue)

document.querySelector('#sortBtn').addEventListener('click', () => {
    sortByAlphabeticalOrder(getValue)
})

document.querySelector('#filterBtn1').addEventListener('click', () => {
    filterByUsedBooks(getValue)
})

document.querySelector('#filterBtn2').addEventListener('click', () => {
    displayAllPlaces(getValue)
})




