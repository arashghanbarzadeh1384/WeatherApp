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

  const activeCity =
    weathers.length > 0 ? weathers[weathers.length - 1].name : "";

  return (
    <>
      <div className="relative w-full h-screen overflow-hidden flex flex-col items-center justify-center">
        {weathers.length > 0 && (
          <VideoWeather
            weather={weathers[weathers.length - 1]}
            className="absolute inset-0 w-full h-full object-cover -z-10"
          />
        )}

        {activeCity && (
          <div className="absolute top-5 left-5 z-30">
            <h2 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg uppercase">
              {activeCity}
            </h2>
          </div>
        )}

        <h1 className="text-4xl md:text-5xl font-bold mb-4 mt-2.5 relative z-20 text-black">
          Weather App 🌦️
        </h1>

        <div className="relative z-20 flex flex-col w-full h-full">
          <div className="flex absolute right-5 top-0 gap-2">
            <Input
              text="Enter city..."
              value={city}
              onChange={(e) => setCity(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  getWeather();
                }
              }}
            />

            <Button onClick={getWeather}>Search</Button>
          </div>

          <div className="mt-28 px-6 flex-1 overflow-y-auto scrollbar-hide">
            <div className="mt-11 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pb-10">
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
          </div>
        </div>
      </div>

      {error && <ErrorCity />}
    </>
  );
}
