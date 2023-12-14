import { initMap } from "../google-maps-api.js"
import { yelpApi } from "./yelp-api.js"
export const clickBtn = document.querySelector('#clickBtn')

clickBtn.addEventListener('click', () =>{
    const removeHidden = document.querySelector('#removeHidden')
    removeHidden.removeAttribute("hidden")
    const input = document.querySelector('#showContent')

    // for later
    // const googleMaps = document.querySelector('#map')
    // googleMaps.style.display = 'inline-block'

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