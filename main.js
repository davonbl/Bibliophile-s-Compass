import './style.css';
import { yelpApi, filterByCity, displayAllPlaces } from './src/yelp-api.js';
import { filterByUsedBooks } from './src/filter-places.js';
import { sortByAlphabeticalOrder } from './src/sort-places.js';
import { initMap } from './google-maps-api.js';
import { enabledCors } from './src/cors-bypasser.js';

// (function() {
//     var cors_api_host = 'cors-anywhere.herokuapp.com';
//     var cors_api_url = 'https://' + cors_api_host + '/';
//     var slice = [].slice;
//     var origin = window.location.protocol + '//' + window.location.host;
//     var open = XMLHttpRequest.prototype.open;
//     XMLHttpRequest.prototype.open = function() {
//         var args = slice.call(arguments);
//         var targetOrigin = /^https?:\/\/([^\/]+)/i.exec(args[1]);
//         if (targetOrigin && targetOrigin[0].toLowerCase() !== origin &&
//             targetOrigin[1] !== cors_api_host) {
//             args[1] = cors_api_url + args[1];
//         }
//         return open.apply(this, args);
//     };
// })()


// console.log(filterByUsedBooks(getValue))
// console.log(sortByAlphabeticalOrder(getValue))


//This works great
// displayAllPlaces(getValue)
// sortByAlphabeticalOrder(getValue)
// let getValue = await yelpApi()
// displayAllPlaces(getValue)

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




