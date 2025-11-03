const PlantForm = () => {
  return (
    <form className="bg-gradient-to-br from-green-50 to-emerald-100 p-8 rounded-2xl shadow-md border border-green-200 mx-auto mt-6">
      <h2 className="text-3xl font-semibold text-emerald-800 mb-8 text-center">
        Add New Plant 🌿
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left column */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Plant Name</label>
            <input
              type="text"
              name="name"
              placeholder="Aloe Vera"
              className="w-full p-3 mt-1 border border-green-300 rounded-md focus:ring-2 focus:ring-green-400 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Species</label>
            <input
              type="text"
              name="species"
              placeholder="Succulent"
              className="w-full p-3 mt-1 border border-green-300 rounded-md focus:ring-2 focus:ring-green-400 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Light Requirement</label>
            <input
              type="text"
              name="lightRequirement"
              placeholder="Bright, indirect"
              className="w-full p-3 mt-1 border border-green-300 rounded-md focus:ring-2 focus:ring-green-400 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Health Status</label>
            <select
              name="health"
              className="w-full p-3 mt-1 border border-green-300 rounded-md focus:ring-2 focus:ring-green-400 outline-none"
            >
              <option>Healthy</option>
              <option>Needs Water</option>
              <option>Wilting</option>
            </select>
          </div>
        </div>

        {/* Right column */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Water Frequency</label>
            <input
              type="text"
              name="waterFrequency"
              placeholder="Once a week"
              className="w-full p-3 mt-1 border border-green-300 rounded-md focus:ring-2 focus:ring-green-400 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Temperature Range</label>
            <input
              type="text"
              name="temperatureRange"
              placeholder="18°C - 26°C"
              className="w-full p-3 mt-1 border border-green-300 rounded-md focus:ring-2 focus:ring-green-400 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Last Watered</label>
            <input
              type="date"
              name="lastWatered"
              className="w-full p-3 mt-1 border border-green-300 rounded-md focus:ring-2 focus:ring-green-400 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Growth (%)</label>
            <input
              type="number"
              name="growth"
              min="0"
              max="100"
              placeholder="e.g., 40"
              className="w-full p-3 mt-1 border border-green-300 rounded-md focus:ring-2 focus:ring-green-400 outline-none"
            />
          </div>
        </div>
      </div>

      <div className="mt-8 flex justify-center">
        <button
          type="submit"
          className="bg-emerald-600 text-white px-8 py-3 rounded-lg hover:bg-emerald-700 transition shadow-sm"
        >
          Add Plant
        </button>
      </div>
    </form>
  );
};

export default PlantForm;
