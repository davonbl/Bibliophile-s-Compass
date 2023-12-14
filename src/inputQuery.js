import { initMap } from "../google-maps-api.js"
import { yelpApi } from "./yelp-api.js"
export const clickBtn = document.querySelector('#clickBtn')

clickBtn.addEventListener('click', () =>{
    const input = document.querySelector('#showContent')
    // debugger
    console.log(input.value.toLowerCase())
    if(localStorage.getItem('inputLocation')){
        let comparePerviousInput = JSON.parse(localStorage.getItem('inputLocation'))
        if(input.value.toLowerCase() !== comparePerviousInput){
            localStorage.removeItem('inputLocation')
            yelpApi(input.value.toLowerCase())
        }
    }else{
        yelpApi(input.value.toLowerCase())
    }
    
    // const eastVilliageBooks = { lat: 40.727405, lng: -73.984462 };
    input.value = ''
    // initMap(null)
})