import { useState } from 'react'
import dead_soil from '../assets/dead_soil.jpg'
const Plants = () => {

  const [ plants, setPlants] = useState([]);

  return (
     <div className="p-4">
      {/* Header */}
      <div className="flex items-center">
        <p className="text-3xl md:text-4xl font-bold text-gray-800">Plants</p>
        <button className="ml-auto bg-green-600 text-white px-5 py-2 rounded-full hover:bg-green-700 transition cursor-pointer">
          + Add New Plant
        </button>
      </div>

      {/* Empty state */}
      <div className="mt-10">
        {!plants.length && (
          <div className="flex flex-col items-center justify-center text-center text-gray-600 h-[70vh]">
            <img
              src={dead_soil}
              alt="No plants"
              className="max-w-[220px] w-full h-auto mb-4 rounded-md opacity-90"
            />
            <h2 className="text-lg font-semibold text-gray-700">No Plants Yet 🌱</h2>
            <p className="text-sm text-gray-500 mt-1">
              Add your first plant to start tracking its growth.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Plants