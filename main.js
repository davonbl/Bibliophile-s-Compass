import './style.css';
import { yelpApi, filterByUsedBooks, sortByAlphabeticalOrder, filterByCity, displayAllPlaces } from './src/yelp-api.js';


let getValue = await yelpApi()

// console.log(filterByUsedBooks(getValue))
// console.log(sortByAlphabeticalOrder(getValue))


//This works great
// displayAllPlaces(getValue)
// sortByAlphabeticalOrder(getValue)
filterByUsedBooks(getValue)

