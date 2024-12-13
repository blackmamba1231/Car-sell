import { useState } from "react";

export default function PriceInfo() {
  const [showEMIModal, setShowEMIModal] = useState(false);
  const [showPriceBreakup, setShowPriceBreakup] = useState(false);
  const [selectedCity, setSelectedCity] = useState("New Delhi");
  const [onRoadPrice, setOnRoadPrice] = useState(1640817); // Default price for New Delhi

  const cities = [
    { name: "New Delhi", price: 1640817 },
    { name: "Mumbai", price: 1712000 },
    { name: "Bangalore", price: 1690000 },
    { name: "Chennai", price: 1678000 },
  ];

  const toggleEMIModal = () => {
    setShowEMIModal((prev) => !prev);
  };

  const togglePriceBreakup = () => {
    setShowPriceBreakup((prev) => !prev);
  };

  const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const city = cities.find((c) => c.name === event.target.value);
    if (city) {
      setSelectedCity(city.name);
      setOnRoadPrice(city.price);
    }
  };

  return (
    <div className="bg-gradient-to-br from-white via-orange-100 to-red-200 p-6 rounded-lg shadow-lg">
      {/* Price Display Section */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-3xl font-semibold text-red-900">
          ₹6.3 - 8.8 Lakh
        </h2>
        <div className="flex items-center gap-2">
          <span className="text-sm text-red-700">*Ex-showroom Price in </span>
          <select
            value={selectedCity}
            onChange={handleCityChange}
            className="text-sm text-red-700 bg-transparent border-b border-red-700 focus:outline-none focus:border-red-900"
          >
            {cities.map((city) => (
              <option key={city.name} value={city.name}>
                {city.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <p className="text-sm text-gray-600">
        On-Road Price in {selectedCity}: ₹{onRoadPrice.toLocaleString()}
      </p>

      {/* Buttons Section */}
      <div className="grid grid-cols-2 gap-4 mt-4">
        <button
          onClick={toggleEMIModal}
          className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600"
        >
          Monthly EMI
        </button>
        <button
          onClick={togglePriceBreakup}
          className="w-full border-red-500 text-red-700 py-2 border rounded-md hover:bg-red-100"
        >
          Price Break-up
        </button>
      </div>

      {/* EMI Modal */}
      {showEMIModal && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
          <div className="bg-white w-11/12 md:w-2/3 lg:w-1/2 p-6 rounded-lg shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-red-900">EMI Breakdown</h3>
              <button
                className="text-red-500 font-semibold"
                onClick={toggleEMIModal}
              >
                Close
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {/* Left Section */}
              <div>
                <p className="font-semibold">Z2 (Petrol) (Base Model)</p>
                <ul className="space-y-2 mt-4">
                  <li className="flex justify-between">
                    <span>Ex-Showroom Price</span>
                    <span>₹13,85,199</span>
                  </li>
                  <li className="flex justify-between">
                    <span>RTO</span>
                    <span>₹1,43,320</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Insurance</span>
                    <span>₹97,846</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Others</span>
                    <span>₹14,451.99</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Optional</span>
                    <span>₹65,120</span>
                  </li>
                  <li className="flex justify-between font-bold border-t pt-2">
                    <span>On-Road Price</span>
                    <span>₹{onRoadPrice.toLocaleString()}</span>
                  </li>
                </ul>
              </div>

              {/* Right Section */}
              <div className="border-l pl-4">
                <h4 className="font-semibold text-lg mb-4">EMI Calculator</h4>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span>Your Monthly EMI</span>
                    <span className="font-bold">₹32,462</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Rate of Interest</span>
                    <span>9.4% for 5 years</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Down Payment</span>
                    <span>₹1,71,000</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Loan Amount</span>
                    <span>₹15,34,936</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Interest Amount</span>
                    <span>₹2,12,784</span>
                  </li>
                  <li className="flex justify-between font-bold border-t pt-2">
                    <span>Payable Amount</span>
                    <span>₹19,47,720</span>
                  </li>
                </ul>
              </div>
            </div>
            <button
              className="mt-6 bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 w-full"
              onClick={toggleEMIModal}
            >
              Get a Call from Dealer
            </button>
          </div>
        </div>
      )}

      {/* Price Break-up Modal */}
      {showPriceBreakup && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
          <div className="bg-white w-11/12 md:w-2/3 lg:w-1/2 p-6 rounded-lg shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-red-900">Price Break-up</h3>
              <button
                className="text-red-500 font-semibold"
                onClick={togglePriceBreakup}
              >
                Close
              </button>
            </div>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span>Ex-Showroom Price</span>
                <span>₹13,85,199</span>
              </li>
              <li className="flex justify-between">
                <span>RTO</span>
                <span>₹1,43,320</span>
              </li>
              <li className="flex justify-between">
                <span>Insurance</span>
                <span>₹97,846</span>
              </li>
              <li className="flex justify-between">
                <span>Others</span>
                <span>₹14,451.99</span>
              </li>
              <li className="flex justify-between">
                <span>Optional</span>
                <span>₹65,120</span>
              </li>
              <li className="flex justify-between font-bold border-t pt-2">
                <span>Total On-Road Price</span>
                <span>₹{onRoadPrice.toLocaleString()}</span>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
