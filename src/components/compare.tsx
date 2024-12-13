import { useState } from "react";
import { Plus, Search } from "lucide-react";

export default function AddToCompare() {
  const [compareList, setCompareList] = useState<any[]>([]);
  const [isCompareBoxOpen, setIsCompareBoxOpen] = useState(false);
  const [showSearch, setShowSearch] = useState<number | null>(null);
  const [carSearch, setCarSearch] = useState("");

  const availableCars = [
    { name: "Car Model A" },
    { name: "Car Model B" },
    { name: "Car Model C" },
    { name: "Car Model D" },
  ]; // Replace with actual car data.

  const handleAddCar = (car: any) => {
    if (compareList.length < 3) {
      setCompareList([...compareList, car]);
      setShowSearch(null); // Close the search box after adding.
    } else {
      alert("You can only compare up to 3 cars.");
    }
  };

  const handleRemoveCar = (car: any) => {
    setCompareList(compareList.filter((item) => item !== car));
  };

  const toggleCompareBox = () => {
    setIsCompareBoxOpen(!isCompareBoxOpen);
  };

  return (
    <div className="relative">
      {/* Add to Compare Button */}
      <button
        onClick={toggleCompareBox}
        className="p-2 rounded-md text-white bg-gradient-to-r from-orange-400 via-red-500 to-red-600 hover:from-orange-500 hover:to-red-700"
      >
        + Add to Compare
      </button>

      {/* Compare Box */}
      {isCompareBoxOpen && (
        <div className="mt-4 p-4 border rounded-lg bg-gradient-to-br from-yellow-100 via-orange-200 to-red-300 shadow-lg">
          <h2 className="text-xl font-semibold mb-4 text-red-900">Compare Cars</h2>
          <div className="grid grid-cols-3 gap-4">
            {/* Show added cars */}
            {compareList.map((car, index) => (
              <div
                key={index}
                className="p-4 border rounded-lg bg-white flex flex-col items-center shadow-sm"
              >
                <h3 className="text-sm font-medium text-red-800">{car.name}</h3>
                <button
                  className="text-red-500 text-xs hover:underline"
                  onClick={() => handleRemoveCar(car)}
                >
                  Remove
                </button>
              </div>
            ))}

            {/* Plus icons for empty slots */}
            {Array(3 - compareList.length)
              .fill(null)
              .map((_, index) => (
                <div
                  key={index}
                  className="p-4 border rounded-lg bg-white flex flex-col items-center justify-center shadow-sm"
                >
                  {showSearch === index ? (
                    <div className="w-full">
                      {/* Search Box */}
                      <div className="relative">
                        <Search className="absolute left-2 top-2 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          value={carSearch}
                          onChange={(e) => setCarSearch(e.target.value)}
                          placeholder="Search cars"
                          className="pl-10 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                        />
                      </div>

                      {/* Search Results */}
                      <div className="mt-2 max-h-32 overflow-y-auto border rounded-md bg-white">
                        {availableCars
                          .filter((car) =>
                            car.name
                              .toLowerCase()
                              .includes(carSearch.toLowerCase())
                          )
                          .map((car, idx) => (
                            <div
                              key={idx}
                              className="p-2 hover:bg-orange-100 cursor-pointer"
                              onClick={() => handleAddCar(car)}
                            >
                              {car.name}
                            </div>
                          ))}
                      </div>
                    </div>
                  ) : (
                    // Plus icon for adding cars
                    <button
                      onClick={() => setShowSearch(index)}
                      className="p-2 bg-gradient-to-r from-orange-400 via-red-500 to-red-600 rounded-full text-white hover:from-orange-500 hover:to-red-700"
                    >
                      <Plus className="w-5 h-5" />
                    </button>
                  )}
                </div>
              ))}
          </div>

          {compareList.length === 0 && (
            <p className="text-red-700">No cars added for comparison.</p>
          )}
        </div>
      )}
    </div>
  );
}
