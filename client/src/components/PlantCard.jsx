const PlantCard = ({ plant }) => {
  return (
    <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl shadow-md border border-green-200 p-6 hover:scale-[1.02] hover:shadow-lg transition-all duration-300 relative overflow-hidden">
      {/* Decorative leaf */}
      <div className="absolute top-0 right-0 opacity-10">
        <svg width="100" height="100" fill="none" viewBox="0 0 24 24">
          <path
            stroke="green"
            strokeWidth="1"
            d="M12 2C7 5 3 10 3 15s4 8 9 8 9-3 9-8-4-10-9-13Z"
          />
        </svg>
      </div>

      <div className="relative">
        <h3 className="text-2xl font-semibold text-emerald-800">{plant.name}</h3>
        <p className="text-sm text-green-700">{plant.species}</p>

        <div className="mt-4 space-y-2 text-sm text-gray-700">
          <p>💧 Water every: <span className="font-medium">{plant.waterFrequency}</span></p>
          <p>🌞 Light: <span className="font-medium">{plant.lightRequirement}</span></p>
          <p>🌡️ Temp: <span className="font-medium">{plant.temperatureRange}</span></p>
          <p>📅 Last watered: <span className="font-medium">{plant.lastWatered}</span></p>
        </div>

        <div className="mt-4">
          <span
            className={`text-xs px-3 py-1 rounded-full ${
              plant.health === 'Healthy'
                ? 'bg-green-200 text-green-800'
                : plant.health === 'Needs Water'
                ? 'bg-yellow-200 text-yellow-800'
                : 'bg-red-200 text-red-800'
            }`}
          >
            {plant.health}
          </span>
        </div>

        <button className="mt-6 w-full bg-emerald-600 text-white font-medium py-2 rounded-lg hover:bg-emerald-700 transition">
          View Details
        </button>
      </div>
    </div>
  );
};

export default PlantCard;