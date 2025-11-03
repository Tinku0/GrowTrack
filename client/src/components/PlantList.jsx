import dead_soil from "../assets/dead_soil.jpg";
import PlantCard from './PlantCard';
const PlantList = ({ plants }) => {
  return (
    <>
      {plants.length != 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 px-4">
          {plants.map((p) => (
            <PlantCard key={p.id} plant={p} />
          ))}
        </div>
      )}
      {plants.length == 0 && (
        <div className="mt-10">
          <div className="flex flex-col items-center justify-center text-center text-gray-600 h-[70vh]">
            <img
              src={dead_soil}
              alt="No plants"
              className="max-w-[220px] w-full h-auto mb-4 rounded-md opacity-90"
            />
            <h2 className="text-lg font-semibold text-gray-700">
              No Plants Yet 🌱
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Add your first plant to start tracking its growth.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default PlantList;