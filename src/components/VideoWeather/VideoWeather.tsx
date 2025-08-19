interface WeatherData {
  weather: {
    main: string;
    description: string;
  }[];
}

interface VideoWeatherProps {
  weather: WeatherData;
  className?: string; 
}

export default function VideoWeather({ weather, className }: VideoWeatherProps) {
  const getVideo = () => {
    const condition = weather?.weather[0]?.main?.toLowerCase();
    if (!condition) return null;

    if (condition.includes("cloud")) return "/videos/clouds.mp4";
    if (condition.includes("rain")) return "/videos/rain.mp4";
    if (condition.includes("snow")) return "/videos/snow.mp4";
    if (condition.includes("thunderstorm")) return "/videos/thunderstorm.mp4";
    if (condition.includes("haze") || condition.includes("fog")) return "/videos/haze.mp4";
    if (condition.includes("clear")) return "/videos/clear.mp4";
    return null;
  };

  const videoSrc = getVideo();

  return (
    <>
      {videoSrc && (
        <>
          <video
            key={videoSrc}
            autoPlay
            loop
            muted
            className={className ?? "absolute inset-0 w-full h-full object-cover z-0"} // استفاده از className
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/40 z-10" />
        </>
      )}
    </>
  );
}
