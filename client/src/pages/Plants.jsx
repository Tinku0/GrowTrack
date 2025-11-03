import { useState } from "react";
import PlantForm from "../components/PlantForm";
import PlantList from "../components/PlantList";
const Plants = () => {
  const [plants, setPlants] = useState([
    {
      id: 1,
      name: "Aloe Vera",
      species: "Succulent",
      waterFrequency: "Once a week",
      lightRequirement: "Bright, indirect",
      temperatureRange: "18°C - 26°C",
      lastWatered: "2025-10-25",
      health: "Healthy",
    },
    {
      id: 2,
      name: "Peace Lily",
      species: "Indoor plant",
      waterFrequency: "Every 3 days",
      lightRequirement: "Low to medium",
      temperatureRange: "20°C - 28°C",
      lastWatered: "2025-10-27",
      health: "Needs Water",
    },
  ]);
  const [showForm, setShowForm] = useState(false);

  return (
    <div>
      {/* Header */}
      <div className="flex items-center">
        <p className="text-3xl md:text-4xl font-bold text-gray-800">Plants</p>
        <button
          onClick={() => {
            setShowForm(!showForm);
          }}
          className="ml-auto bg-green-600 text-white px-5 py-2 rounded-full hover:bg-green-700 transition cursor-pointer"
        >
          + Add New Plant
        </button>
      </div>

      {/* Add Plant || Plant List */}
      {showForm ? <PlantForm /> : <PlantList plants={plants} />}
    </div>
  );
};

export default Plants;