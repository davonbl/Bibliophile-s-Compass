import './style.css';
import { yelpApi } from './src/yelp-api.js';
import { displayAllPlaces } from './src/get-all-places.js';
import { filterByUsedBooks } from './src/filter-places.js';
import { sortByAlphabeticalOrder } from './src/sort-places.js';
import { enabledCors } from './src/cors-bypasser.js';


enabledCors()

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




