import React, { useEffect } from "react";
import TurkeyMap from "turkey-map-react";
import cities from "../data/cities.json";
import { useDispatch, useSelector } from "react-redux";
import { setLatitude, setLongitude, setWeather } from "../stores/weatherSlice";

export default function TurkeyMapComponent() {
  const dispatch = useDispatch();
  const latitude = useSelector((state) => state.weather.latitude);
  const longitude = useSelector((state) => state.weather.longitude);
  const weather = useSelector((state) => state.weather.weather);

  const handleHover = (event) => {
    let matchingCity = cities.find(function (city) {
      return city.plaka === event.plateNumber;
    });

    if (matchingCity) {
      let lat = matchingCity.lat;
      let lon = matchingCity.lon;

      dispatch(setLatitude(lat));
      dispatch(setLongitude(lon));
    }
  };

  useEffect(() => {
    async function fetchWeather() {
      if (latitude && longitude) {
        const apiKey = process.env.NEXT_PUBLIC_OPENWEATHERMAP_API_KEY;
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&lang=tr&appid=${apiKey}`;
        const response = await fetch(url);
        const data = await response.json();

        dispatch(setWeather(data));
      }
    }

    fetchWeather();
  }, [latitude, longitude, dispatch]);

  return (
    <div>
      <TurkeyMap
        hoverable={true}
        onHover={handleHover}
        showTooltip={true}
        tooltipText={
          weather
            ? `${weather.name} ${weather.main?.temp || ""}°C ${
                weather.weather?.[0]?.description || ""
              }`
            : "loading...."
        }
        customStyle={{ idleColor: "#fff", hoverColor: "#282b66" }}
      />
    </div>
  );
}
