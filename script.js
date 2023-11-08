document.addEventListener("DOMContentLoaded", function () {
    const citySelector = document.getElementById("cities");
    const weatherContainer = document.getElementById("weather-data");

    citySelector.addEventListener("change", function () {
        const selectedCity = citySelector.value;

        fetch(`http://backend-container/weather/${selectedCity.toLowerCase()}`)
            .then(response => response.json())
            .then(data => {
                weatherContainer.innerHTML = `
                    <p>Ciudad: ${data.name}</p>
                    <p>Longitud: ${data.coord.lon}</p>
                    <p>Latitud: ${data.coord.lat}</p>
                    <p>Temperatura: ${data.main.temp}°C</p>
                    <p>Nivel del Mar: ${data.main.sea_level}</p>
                    <div id="map" style="height: 250px; width: 100%;"></div>
                `;

                // Insertar el mapa de la ciudad
                initMap(data.coord.lat, data.coord.lon);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                weatherContainer.innerHTML = '<p>Error al cargar los datos</p>';
            });
    });
});

function initMap(lat, lon) {
    // Aquí puedes integrar un mapa utilizando librerías como Google Maps o Leaflet
    // Siguiendo la documentación específica de la API que elijas para la integración del mapa
}
