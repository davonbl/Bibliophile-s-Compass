import './style.css';
import { testingYelpApi, filterByUsedBooks, sortByAlphabeticalOrder } from './src/yelp-api.js';


let getValue = await testingYelpApi()

console.log(filterByUsedBooks(getValue))
// console.log(sortByAlphabeticalOrder(getValue))

