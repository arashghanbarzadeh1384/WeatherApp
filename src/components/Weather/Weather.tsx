"use client";
import axios from "axios";
import { useState } from "react";
import Input from "../Search";
import Button from "../Button/Button";
import Card from "../Card/Card";
import VideoWeather from "../VideoWeather/VideoWeather";
import ErrorCity from "../Error/ErrorCity";

const API_KEY = "b4fdfbac8dbd3c563adf3bd5f71d6d3a";

export default function Weather() {
  const [city, setCity] = useState<string>("");
  const [weather, setWeather] = useState<any>(null);
  const [error, setError] = useState<boolean>(false);

  const getWeather = async () => {
    try {
      const { data: current } = await axios.get(
        "https://api.openweathermap.org/data/2.5/weather",
        {
          params: {
            q: city,
            appid: API_KEY,
            units: "metric",
            lang: "en",
          },
        }
      );
      setWeather(current);
    } catch (error) {
      console.error(error);
      setError(true);
    }
  };

  return (
    <>
      <div className="relative w-full h-screen flex flex-col items-center justify-center">
        <VideoWeather weather={weather} />;
        <h1 className="text-3xl font-bold mb-4 relative z-20 text-black">
          Weather App 🌦️
        </h1>
        <div className="flex flex-col gap-4 relative z-20">
          <div className="flex gap-2">
            <Input
              text="Enter city..."
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <Button onClick={getWeather}>Search</Button>
          </div>

          {weather && (
            <Card
              city={weather.name}
              temp={weather.main.temp}
              description={weather.weather[0].description}
              wind={weather.wind.speed}
              humidity={weather.main.humidity}
            />
          )}
        </div>
      </div>
      {error && <ErrorCity />}
    </>
  );
}
