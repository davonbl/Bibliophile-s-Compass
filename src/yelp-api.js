import { displayAllPlaces } from './get-all-places.js'
import { YELP_API_KEY } from "../API_KEYS.js";
import { clickBtn } from "./inputQuery.js";

import axios from "axios";
import { initMap } from "./google-maps-api.js";

export async function yelpApi(input,offsetNum){
    // debugger

    try{      /*
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
        // console.log(inputLocation)

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
            // console.log('it works')
        }

        const withCategories = `?location=${inputLocation}&term=bookstore&categories=bookstores&sort_by=best_match&limit=10&offset=${offsetNum}`;
        const withoutCategories = '?location=New%20York&term=bookstore&sort_by=best_match'

        const promise = axios.get(`${baseUrl}${withCategories}`, options)

        const response = await promise 
        //HERE ARE THE LAST CONSOLE LOGS I COMMENTED OUT   
        // console.log('response: ', response.data)
        const businessesArr = response.data.businesses
        //HERE ARE THE LAST CONSOLE LOGS I COMMENTED OUT
        // console.log('numOfTotal: ', response.data.total)

        let totalNumOfPlaces = response.data.total; 
        if(!localStorage.getItem('totalNumOfPlaces')){
            localStorage.setItem('totalNumOfPlaces', totalNumOfPlaces)
        }

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

        let testingObj = await Promise.all(businessesArr)

        if(input !== ''){
            // console.log(businessesArr)
            // let testingObj = await Promise.all(businessesArr)
            displayAllPlaces(testingObj, totalNumOfPlaces)
        }

        // displayAllPlaces(businessesArr)
        return testingObj
    } catch(err){
        console.log(err)
    }



// fetch('https://api.yelp.com/v3/businesses/search?location=New%20York&term=Strand&categories=bookstores&sort_by=best_match&limit=20', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));

}

// export function filterByCity(location){
//     console.log(location)

// }
