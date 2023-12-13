import './style.css';
import { yelpApi, filterByCity, displayAllPlaces } from './src/yelp-api.js';
import { filterByUsedBooks } from './src/filter-places.js';


let getValue = await yelpApi()

// console.log(filterByUsedBooks(getValue))
// console.log(sortByAlphabeticalOrder(getValue))


//This works great
// displayAllPlaces(getValue)
// sortByAlphabeticalOrder(getValue)
filterByUsedBooks(getValue)

