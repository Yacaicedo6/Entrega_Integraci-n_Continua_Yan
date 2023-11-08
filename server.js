const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3000;

app.get('/weather/:city', async (req, res) => {
    const city = req.params.city;

    try {
        const cityNames = {
            bogota: '3688689', // ID de Bogotá
            medellin: '3674962', // ID de Medellín
            cali: '3681483', // ID de Cali
            buenaventura: '3688451', // ID de Buenaventura
            // Agrega otras ciudades de Colombia aquí con su respectivo ID de OpenWeatherMap
        };

        const apiKey = 'fd78a65f7d77b9bb86bc45c063e6d6ee';
        const cityId = cityNames[city];

        if (!cityId) {
            res.status(404).json({ error: 'Ciudad no encontrada' });
            return;
        }

        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${apiKey}&units=metric`);
        const weatherData = response.data;

        res.json(weatherData);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
