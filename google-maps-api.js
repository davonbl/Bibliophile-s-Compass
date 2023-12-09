let map;

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");
  const eastVilliageBooks = { lat: 40.727361, lng: -73.984396  };
  map = new Map(document.getElementById("map"), {
    center: eastVilliageBooks,
    zoom: 13,
  });
}

initMap();