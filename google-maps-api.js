// let map;
import { clickBtn } from './src/inputQuery.js';

export async function initMap(testing) {
  const { Map } = await google.maps.importLibrary("maps");
//   const { AdvancedMarkerElement } = await google.maps.importLibrary("marker")

  const eastVilliageBooks = { lat: 40.727405, lng: -73.984462 };

  const map = new Map(document.getElementById("map"), {
    center: eastVilliageBooks,
    zoom: 13,
    // mapId: "DEMO_MAP_ID"
  });

//   console.log(testing !== undefined)
//   console.log(testing !== null)
  // const marker = new google.maps.Marker({
  //   position: eastVilliageBooks,
  //   map: map,
  // })

//   debugger
//   console.log(testing === null)
//   console.log(testing !== undefined)



  if(testing !== undefined && testing !== null){
    //this is where I would create a forLoop to loop through the coordinates from the 
    //yelp or google places API, and I think I have to figure out how to create a filter mechnism

    testing.forEach((ele) => {
      // debugger 
      console.log(ele)
      // let lat = Number(ele.latitude)
      // let lng = Number(ele.longitude)
      // let obj = Object.assign({}, lat, lng)
      let lat = Number(ele.latitude);
      let lng = Number(ele.longitude);
      let position = new google.maps.LatLng(lat, lng)
      new google.maps.Marker({
        position: position,
        map: map,
      })
    })


    // console.log(testing)

    

    // this line of code will be the first to remove all of the inital google markers
    // marker.position = null; 


  }


//   const marker = new AdvancedMarkerElement({
//     map: map,
//     position: eastVilliageBooks
//     // title: "Uluru",
//   })
}

initMap();