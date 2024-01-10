import { initMap } from "./google-maps-api.js"
import { pageButtons } from "./pageButtons.js"


 function displayAllPlaces(location , numOfSpots){

    let markersArr = []

    let orderedList = document.createElement('ol')
    orderedList.setAttribute('id', 'yelpData')

    let parentContainer = document.querySelector('#parentContainer')

    location.forEach( (ele, index) => {
        let childArr =[]
        // const places = document.getElementById("yelpData");
        // console.log(ele.coordinates)
        // console.log(ele.coordinates.latitude)
        // console.log(ele.coordinates.longitude)

        let coordinates = ele.coordinates

        let name = ele.name
        let address = ele.location
        let phoneNumber = ele.display_phone

        // let contentObj = Object.assign({}, name, address, phoneNumber)

        childArr.push(coordinates, name,address, phoneNumber)

        markersArr.push(childArr)
        // console.log(places.hasChildNodes())
        // console.log(places.childNodes)
        // console.log(places.children)

        while (parentContainer.hasChildNodes()) {
            parentContainer.removeChild(parentContainer.firstChild);
          }

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
        anchorTag.setAttribute('target', "_blank")

        let secondP = document.createElement('p')
        secondP.classList.add('bookstore-website')
        secondP.innerText = 'website'

        anchorTag.appendChild(secondP)

        secondListDiv.append(image, anchorTag)

        placeList.append(firstListDiv, secondListDiv)

        orderedList.append(placeList)

        parentContainer.append(orderedList)

        if(index === location.length - 1){
          debugger
          console.log('this is the last bookstore', ele)
          pageButtons(numOfSpots, orderedList)

          // let unorderList = document.createElement('ul');
          // unorderList.setAttribute('id', 'numOfPages')
          // unorderList.classList.add('pages-list')

        }

        

        // console.log(ele.name)

    })

    


    // let unorderList = document.createElement('ul');
    // unorderList.setAttribute('id', 'numOfPages')
    // unorderList.classList.add('pages-list')

    // for(let i = 1 ; i < actualPages; i++ ){

    // }

    // let unorderList = document.createElement('ul');
    // unorderList.setAttribute('id', 'numOfPages')
    // unorderList.classList.add('pages-list')



    // console.log(markersArr)
    initMap(markersArr)



    // console.log(location)
}

export {displayAllPlaces} 