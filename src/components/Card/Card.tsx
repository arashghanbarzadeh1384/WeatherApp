type CardProps = {
  city: string;
  description: string;
  temp: number;
  humidity: number;
  wind: number;
};

export default function CardServer({ city, description, temp, humidity, wind }: CardProps) {
  return (
    <div className="relative bg-white/20 backdrop-blur-xl border border-white/30 text-center p-8 rounded-2xl shadow-2xl w-80 mx-auto overflow-hidden group hover:scale-105 transition-transform duration-500">
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent opacity-50 group-hover:opacity-70 transition-opacity duration-500 rounded-2xl"></div>

      <div className="relative z-10">
        <h2 className="text-3xl font-bold mb-3 text-black drop-shadow-sm">{city}</h2>
        <p className="text-lg font-semibold text-gray-800 mb-3 capitalize tracking-wide">{description}</p>
        <p className="text-5xl font-extrabold mb-6 text-black drop-shadow">{Math.round(temp)}°C</p>

        <div className="flex justify-around text-black/80 text-sm font-medium">
          <p>Humidity: {humidity}%</p>
          <p>Wind: {wind} m/s</p>
        </div>
      </div>

      <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/20 rounded-full blur-2xl"></div>
      <div className="absolute -bottom-10 -left-10 w-28 h-28 bg-white/10 rounded-full blur-2xl"></div>
    </div>
  );
}
