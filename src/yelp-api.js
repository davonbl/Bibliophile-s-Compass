import { YELP_API_KEY } from "../API-KEY.js";
import { clickBtn } from "./inputQuery.js";
// import {displayAllPlaces} from './sort-places.js'
import axios from "axios";
import { initMap } from "../google-maps-api.js";


/*   Some to consider */

// vex.dialog.confirm({
//     message: "You need to enable CORS for this site. Click 'OK' to go now",
//     callback: function (value) {
//       if (value) {
//         console.log("LETS GO")
//         window.open("https://cors-anywhere.herokuapp.com/corsdemo");
//       } else {
//         console.log("No, thankyou...")
//       }
//     }
//   })


export async function yelpApi(input){

    /*
    The cors_anywhere variable is needed to bypass the cors error that is a byproduct of the Yelp development team 'to keep
    users from developing front-end apps or websites and storing their API key in plaintext'    
    */
    const cors_anywhere = 'https://cors-anywhere.herokuapp.com/'
    // const cors_anywhere = 'https://cors-proxy.fringe.zone/'
    const baseUrl = `${cors_anywhere}https://api.yelp.com/v3/businesses/search`;

    const options = {
        // method: 'GET',
        // mode: 'cors',
        headers: {
          Authorization: `Bearer ${YELP_API_KEY}`,
          accept: 'application/json',
        //   "Access-Control-Allow-Origin": "*",
          'X-Requested-With': 'xmlhttprequest'

        }
      };

    let inputLocation; 
    console.log(inputLocation)

    if(!localStorage.getItem('inputLocation')){
        let jsonInput = input
        localStorage.setItem('inputLocation', JSON.stringify(jsonInput))
        // inputLocation = input.split(' ').join('%20').toLowerCase()
        inputLocation = input.split(' ').join('+').toLowerCase()
        // console.log(localStorage.getItem('inputLocation'))
    }else{
        let parseJSON = JSON.parse(localStorage.getItem('inputLocation'))
        // inputLocation = parseJSON.split(' ').join('%20').toLowerCase()
        inputLocation = parseJSON.split(' ').join('+').toLowerCase()
        console.log('it works')
    }

    const withCategories = `?location=${inputLocation}&term=bookstore&categories=bookstores&sort_by=best_match`;
    const withoutCategories = '?location=New%20York&term=bookstore&sort_by=best_match'

    const promise = axios.get(`${baseUrl}${withCategories}`, options)

    const response = await promise
    // console.log(promise)

    // console.log(response.data)
    // console.log(response.data.businesses)
    
    const businessesArr = response.data.businesses

    // console.log('interesting', businessesArr)
    // console.log(businessesArr[0].name[0])

    // filterByUsedBooks(businessesArr)

    let returnFilterObj = businessesArr.filter((bookstore) => {
        // console.log(bookstore)
        // console.log(bookstore.name)
        // console.log('one', bookstore.categories)
        let testing = bookstore.categories
        // console.log(testing.includes('Used Bookstore'))
        // console.log(Object.values(bookstore.categories))

        let testingMap = testing.map((ele) => {
            // console.log(ele)
            return ele
        })

        let testingFilter = testingMap.filter((ele) => {
            // console.log(ele.alias)
            // console.log(ele.title)
            // console.log(ele.alias === 'usedbooks')
            if(ele.alias === 'usedbooks' || ele.title === 'Used Bookstore'){
                return 'usedbooks'
            }
        })
        // console.log('return item', testingMap)
        // console.log('true/false', testingFilter.some( info => info.alias === 'usedBooks' || info.title === 'Used Bookstore' ) )
        // console.log('return item', testingFilter)

        let trueOrFalse = testingFilter.some( info => info.alias === 'usedBooks' || info.title === 'Used Bookstore' ) 

        return trueOrFalse === true? true : false; 
        // console.log(...bookstore.categories)
    })

    if(input !== ''){
        console.log(businessesArr)
        displayAllPlaces(businessesArr)
    }

    // displayAllPlaces(businessesArr)
    return businessesArr

    // console.log('look here', returnFilterObj)

    // console.log(response.data.businesses[0])
    // console.log(response.data.businesses[0].name)
    // console.log(response.data.businesses[0].categories)
    // console.log(response.data.businesses[0].image_url)
    // console.log(response.data.businesses[0].url)
    // console.log(response.data.businesses[0].coordinates)
    // console.log(response.data.businesses[0].location)
    // console.log(response.data.businesses[0].display_phone)
    // console.log(response.data)

// fetch('https://api.yelp.com/v3/businesses/search?location=New%20York&term=Strand&categories=bookstores&sort_by=best_match&limit=20', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));

}

export function filterByCity(location){
    console.log(location)

}

export function displayAllPlaces(location){

    // console.log(location)

    let markersArr = []

    let orderedList = document.createElement('ol')
    orderedList.setAttribute('id', 'yelpData')

    let parentContainer = document.querySelector('#parentContainer')

    location.forEach( ele => {
        // const places = document.getElementById("yelpData");
        console.log(ele.coordinates)
        console.log(ele.coordinates.latitude)
        console.log(ele.coordinates.longitude)

        let coordinates = ele.coordinates

        markersArr.push(coordinates)
        // console.log(places.hasChildNodes())
        // console.log(places.childNodes)
        // console.log(places.children)

        while (parentContainer.hasChildNodes()) {
            parentContainer.removeChild(parentContainer.firstChild);
          }

        // if (parentContainer.hasChildNodes()) {
        //     parentContainer.removeChild(parentContainer.children[0]);
        // }



        // let orderedList = document.createElement('ol')
        // orderedList.setAttribute('id', 'yelpData')

        let placeList = document.createElement('li')
        placeList.setAttribute('id', 'placeList')
        placeList.classList.add('yelp-bookstore')

        let firstListDiv = document.createElement('div')
        firstListDiv.setAttribute('id', 'listContent')
        firstListDiv.classList.add('list-content')

        let h3 = document.createElement('h3')
        let p1 = document.createElement('p')
        let p2 = document.createElement('p')
        let p3 = document.createElement('p')

        h3.innerText = ele.name
        p1.innerText = `${ele.location.address1}`
        p2.innerText = `${ele.location.city} ${ele.location.state}, ${ele.location.zip_code}`
        p3.innerText = `${ele.rating} / 5`

        firstListDiv.append(h3, p1, p2, p3)

        let secondListDiv = document.createElement('div')
        secondListDiv.classList.add('list-content')

        let image = document.createElement('img')
        image.setAttribute('id', 'yelpImg')
        image.classList.add('yelp-image')
        image.src = ele.image_url

        let anchorTag = document.createElement('a')
        anchorTag.href = ele.url

        let secondP = document.createElement('p')
        secondP.classList.add('bookstore-website')
        secondP.innerText = 'website'

        anchorTag.appendChild(secondP)

        secondListDiv.append(image, anchorTag)

        placeList.append(firstListDiv, secondListDiv)

        orderedList.append(placeList)

        parentContainer.append(orderedList)

        console.log(ele.name)

    })
    // initMap(null)
    // debugger
    console.log(markersArr)
    initMap(markersArr)



        console.log(location)
}


// filterByUsedBooks()