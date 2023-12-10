import { initMap } from "./google-maps-api.js"
export const clickBtn = document.querySelector('#clickBtn')

clickBtn.addEventListener('click', () =>{
    const input = document.querySelector('#showContent')

    console.log(input.value)
    const eastVilliageBooks = { lat: 40.727405, lng: -73.984462 };
    input.value = ''
    initMap(null)
})