import { initMap } from "./google-maps-api.js"
import { yelpApi } from "./yelp-api.js"
export const clickBtn = document.querySelector('#clickBtn')

clickBtn.addEventListener('click', () =>{
    const removeHidden = document.querySelector('#removeHidden')
    removeHidden.removeAttribute("hidden")
    removeHidden.style.display = 'flex'
    removeHidden.style.justifyContent= "flex-start"
    const input = document.querySelector('#showContent')
    let offsetNum = 0

    // for later
    // const googleMaps = document.querySelector('#map')
    // googleMaps.style.display = 'inline-block'

    if(localStorage.getItem('inputLocation')){
        let comparePerviousInput = JSON.parse(localStorage.getItem('inputLocation'))
        if(input.value.toLowerCase() !== comparePerviousInput){
            // debugger
            localStorage.removeItem('inputLocation')
            yelpApi(input.value.toLowerCase(), offsetNum)
        }else{
            yelpApi(input.value.toLowerCase(), offsetNum)
            // console.log('here lies the error')
            // console.log('you need to evoke the yelpAPI and input the input value in the else condition')
        }
    }else{
        yelpApi(input.value.toLowerCase(), offsetNum)
    }
    
    // const eastVilliageBooks = { lat: 40.727405, lng: -73.984462 };
    input.value = ''
    // initMap(null)
})