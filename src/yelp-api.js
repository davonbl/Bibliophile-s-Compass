import { YELP_API_KEY } from "../API-KEY.js";
import axios from "axios";


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


export async function testingYelpApi(){

    /*
    The cors_anywhere variable is needed to bypass the cors error that is a byproduct of the Yelp development team 'to keep
    users from developing front-end apps or websites and storing their API key in plaintext'    
    */
    const cors_anywhere = 'https://cors-anywhere.herokuapp.com/'
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

    const withCategories = '?location=Brooklyn&term=bookstore&categories=bookstores&sort_by=best_match';
    const withoutCategories = '?location=New%20York&term=bookstore&sort_by=best_match'

    const promise = axios.get(`${baseUrl}${withCategories}`, options)

    const response = await promise
    console.log(promise)

    console.log(response.data)
    // console.log(response.data.businesses)
    
    const businessesArr = response.data.businesses

    console.log('interesting', businessesArr)
    console.log(businessesArr[0].name[0])

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


export function filterByUsedBooks(locations){

    let returnFilterObj = locations.filter((bookstore) => {

        let testing = bookstore.categories

        let testingMap = testing.map((ele) => {
            return ele
        })

        let testingFilter = testingMap.filter((ele) => {
            if(ele.alias === 'usedbooks' || ele.title === 'Used Bookstore'){
                return 'usedbooks'
            }
        })
        let trueOrFalse = testingFilter.some( info => info.alias === 'usedBooks' || info.title === 'Used Bookstore' ) 
        // console.log('testing: ', testingFilter)
        // console.log('different function: ', trueOrFalse)

        return trueOrFalse; 
    })

    // console.log(returnFilterObj)
    return returnFilterObj

}

export function sortByAlphabeticalOrder(locations){

    let sort = locations.sort((a, b) => {
        let alphabet = 'abcdefghijklmnopqrstuvwxyz'

        /* It is not a good idea to re-assigned parameter/argument variables, but to reference it 
            to get the value stored in a variable. Or you will get the error mentioned in the conditional
            block of code 
        */
        //  a = alphabet.indexOf(a.name[0].toLowerCase())
        //  b = alphabet.indexOf(b.name[0].toLowerCase())
        let a0 = alphabet.indexOf(a.name[0].toLowerCase())
        let b0 = alphabet.indexOf(b.name[0].toLowerCase())

        if(a0 === b0){
            /*
            The line of code below cause an error: 
            "Uncaught TypeError: Cannot read properties of undefined (reading '1')"
            */
            // let a2 = alphabet.indexOf(a.name[1].toLowerCase())
            // let b2 = alphabet.indexOf(b.name[1].toLowerCase())

            let a2 = alphabet.indexOf(a.name[1].toLowerCase())
            let b2 = alphabet.indexOf(b.name[1].toLowerCase())
            return a2 - b2
        }else{

            return a0 - b0
        }        
    })
    return sort

}


// filterByUsedBooks()