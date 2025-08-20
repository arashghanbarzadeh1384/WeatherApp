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
    <div className="relative backdrop-blur-xl border border-white/30 text-center p-4 sm:p-6 md:p-8 rounded-2xl shadow-2xl w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto overflow-hidden group hover:scale-105 transition-transform duration-500">
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-50 group-hover:opacity-70 transition-opacity duration-500 rounded-2xl"></div>

      <div className="relative z-10">
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-2 text-white drop-shadow-sm">
          {city}
        </h2>
        <p className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-gray-300 mb-2 capitalize tracking-wide">
          {description}
        </p>
        <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 text-white drop-shadow">
          {Math.round(temp)}°C
        </p>

        <div className="flex flex-col sm:flex-row justify-around text-black/80 text-xs sm:text-sm md:text-base font-medium gap-1 sm:gap-0">
          <p>Humidity: {humidity}%</p>
          <p>Wind: {wind} m/s</p>
        </div>
      </div>

      <div className="absolute -top-8 sm:-top-10 -right-8 sm:-right-10 w-16 sm:w-28 md:w-32 h-16 sm:h-28 md:h-32 bg-white/20 rounded-full blur-2xl"></div>
      <div className="absolute -bottom-8 sm:-bottom-10 -left-8 sm:-left-10 w-12 sm:w-24 md:w-28 h-12 sm:h-24 md:h-28 bg-white/10 rounded-full blur-2xl"></div>
    </div>
  );
}
