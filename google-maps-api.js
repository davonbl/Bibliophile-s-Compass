// let map;
import { clickBtn } from "./testing.js";

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
  const marker = new google.maps.Marker({
    position: eastVilliageBooks,
    map: map,
  })

//   debugger
//   console.log(testing === null)
//   console.log(testing !== undefined)

  if(testing !== undefined && testing === null){
    //this is where I would create a forLoop to loop through the coordinates from the 
    //yelp or google places API, and I think I have to figure out how to create a filter mechnism
    // new google.maps.Marker({
    //     position: testing,
    //     map: map,
    //   })

    // this line of code will be the first to remove all of the inital google markers
    marker.position = null; 


  }


//   const marker = new AdvancedMarkerElement({
//     map: map,
//     position: eastVilliageBooks
//     // title: "Uluru",
//   })
}

initMap();