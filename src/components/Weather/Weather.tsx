"use client";

import axios from "axios";
import { useState } from "react";
import Input from "../Search";
import Button from "../Button/Button";
import Card from "../Card/Card";
import ErrorCity from "../Error/ErrorCity";
import VideoWeather from "../VideoWeather/VideoWeather";

const API_KEY = "b4fdfbac8dbd3c563adf3bd5f71d6d3a";

interface WeatherData {
  name: string;
  main: {
    temp: number;
    humidity: number;
  };
  weather: {
    main: string;
    description: string;
  }[];
  wind: {
    speed: number;
  };
}

export default function Weather() {
  const [city, setCity] = useState<string>("");
  const [weathers, setWeathers] = useState<WeatherData[]>([]);
  const [error, setError] = useState<boolean>(false);

  const getWeather = async () => {
    if (!city.trim()) return;
    try {
      const { data: current } = await axios.get<WeatherData>(
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

      setWeathers((prev) => [...prev, current]);
      setError(false);
      setCity("");
    } catch (err) {
      console.error(err);
      setError(true);
    }
  };

  const activeCity = weathers.length > 0 ? weathers[weathers.length - 1].name : "";

  return (
    <div className="relative w-full min-h-screen bg-white/5 flex flex-col items-center">
      {weathers.length > 0 && (
        <VideoWeather
          weather={weathers[weathers.length - 1]}
          className="absolute inset-0 w-full h-full object-cover -z-10"
        />
      )}

      <header className="w-full max-w-6xl px-4 py-5 z-20">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h1 className="text-2xl md:text-5xl font-bold text-white">Weather App 🌦️</h1>
          </div>

          <div className="w-full sm:w-auto flex items-center gap-2">
            <Input
              text="Enter city..."
              value={city}
              onChange={(e) => setCity(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") getWeather();
              }}
            />

            <Button onClick={getWeather}>Search</Button>
          </div>
        </div>
      </header>

      {activeCity && (
        <div className="w-full max-w-6xl px-4 mt-4 z-20">
          <h2 className="text-xl md:text-4xl font-semibold text-white">{activeCity}</h2>
        </div>
      )}

      {/* Cards grid: responsive with minimal styling changes */}
      <main className="w-full flex-1 max-w-6xl px-4 py-6 z-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {weathers.map((w, idx) => (
            <Card
              key={idx}
              city={w.name}
              temp={w.main.temp}
              description={w.weather[0].description}
              wind={w.wind.speed}
              humidity={w.main.humidity}
            />
          ))}
        </div>
      </main>

      {error && <ErrorCity />}
    </div>
  );
}
