import { yelpApi } from "./yelp-api.js"
import { displayAllPlaces } from "./get-all-places.js"
import { filterByUsedBooks } from "./filter-places.js"
import { sortByAlphabeticalOrder } from "./sort-places.js"




document.querySelector('#sortBtn').addEventListener('click', async() => {
    // debugger
    let currentOffsetNum = JSON.parse(localStorage.getItem('offsetNum'))
    let comparePerviousInput = JSON.parse(localStorage.getItem('inputLocation'))
    let getValue = await yelpApi(comparePerviousInput, currentOffsetNum)
    // initMap(null)
    sortByAlphabeticalOrder(getValue)
})

document.querySelector('#filterBtn1').addEventListener('click', async() => {
    // debugger
    let currentOffsetNum = JSON.parse(localStorage.getItem('offsetNum'))
    let comparePerviousInput = JSON.parse(localStorage.getItem('inputLocation'))
    let getValue = await yelpApi(comparePerviousInput, currentOffsetNum)
    // initMap(null)
    filterByUsedBooks(getValue)
})

document.querySelector('#filterBtn2').addEventListener('click', async() => {
    // debugger
    let currentOffsetNum = JSON.parse(localStorage.getItem('offsetNum'))
    let comparePerviousInput = JSON.parse(localStorage.getItem('inputLocation'))
    let getValue = await yelpApi(comparePerviousInput, currentOffsetNum)
    // initMap(null)
    let totalNumOfPlaces = JSON.parse(localStorage.getItem('totalNumOfPlaces'))
    displayAllPlaces(getValue, totalNumOfPlaces)
})