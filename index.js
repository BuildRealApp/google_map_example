
let map;

// Array of markers
let markers = [
    {
        coordinates: { lat: 53.46283320275885, lng: -2.248211115991157 },
        iconImage: 'https://img.icons8.com/fluent/48/000000/marker-storm.png',
        content: '<h4>Hulme</h4>'
    },
    {
        coordinates: { lat: 53.463842391942, lng: -2.247733682839402 }
    }
]

function initMap() {
    const options = {
        zoom: 16,
        center: {lat: 53.46312701980667, lng: -2.2472026054971903}
    }

    map = new google.maps.Map(
        document.getElementById('map'),
        options
    )

    //Listen to map click
    google.maps.event.addListener(map, 'click', function (event) {
        addMarker({
            coordinates: event.latLng
        })
    })

    for (let i = 0; i< markers.length; i++) {
        addMarker(markers[i])
    }

}

//'https://img.icons8.com/fluent/48/000000/marker-storm.png'
function addMarker(prop) {
    let marker = new google.maps.Marker({
        position: prop.coordinates,
        map: map
    })

    if( prop.iconImage ) {
        marker.setIcon(prop.iconImage)
    }

    if( prop.content ) {
        let information = new google.maps.InfoWindow({
            content: prop.content
        })

        marker.addListener("click", function () {
            information.open(map, marker)
        })
    }
}
