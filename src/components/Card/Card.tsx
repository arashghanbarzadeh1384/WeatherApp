type CardProps = {
  city: string;
  description: string;
  temp: number;
  humidity: number;
  wind: number;
};

export default function CardServer({
  city,
  description,
  temp,
  humidity,
  wind,
}: CardProps) {
  return (
    <div className="relative  backdrop-blur-xl border border-white/30 text-center p-6 sm:p-8 rounded-2xl shadow-2xl w-64 sm:w-72 lg:w-80 mx-auto overflow-hidden group hover:scale-105 transition-transform duration-500">
      <div className="absolute inset-0 bg-gradient-to-br   to-transparent opacity-50 group-hover:opacity-70 transition-opacity duration-500 rounded-2xl"></div>

      <div className="relative z-10">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 text-white drop-shadow-sm">
          {city}
        </h2>
        <p className="text-sm sm:text-base lg:text-lg font-semibold text-gray-500 mb-2 capitalize tracking-wide">
          {description}
        </p>
        <p className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 text-white drop-shadow">
          {Math.round(temp)}°C
        </p>

        <div className="flex justify-around text-black/80 text-xs sm:text-sm font-medium">
          <p>Humidity: {humidity}%</p>
          <p>Wind: {wind} m/s</p>
        </div>
      </div>

      <div className="absolute -top-10 -right-10 w-20 sm:w-28 lg:w-32 h-20 sm:h-28 lg:h-32 bg-white/20 rounded-full blur-2xl"></div>
      <div className="absolute -bottom-10 -left-10 w-16 sm:w-24 lg:w-28 h-16 sm:h-24 lg:h-28 bg-white/10 rounded-full blur-2xl"></div>
    </div>
  );
}
