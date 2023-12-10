// let map;

async function initMap(testing) {
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker")

  const eastVilliageBooks = { lat: 40.727405, lng: -73.984462 };

  const map = new Map(document.getElementById("map"), {
    center: eastVilliageBooks,
    zoom: 13,
    // mapId: "DEMO_MAP_ID"
  });

  new google.maps.Marker({
    position: eastVilliageBooks,
    map: map,
  })

//   const marker = new AdvancedMarkerElement({
//     map: map,
//     position: eastVilliageBooks
//     // title: "Uluru",
//   })
}

initMap();