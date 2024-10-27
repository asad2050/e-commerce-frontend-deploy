import React, { useState } from 'react';

interface Branch {
  name: string;
  address: string;
}

const branchesData: { [key: string]: Branch[] } = {
  Mumbai: [
    { name: 'Branch 1', address: 'Address 1, Mumbai' },
    { name: 'Branch 2', address: 'Address 2, Mumbai' },
  ],
  Delhi: [
    { name: 'Branch 1', address: 'Address 1, Delhi' },
    { name: 'Branch 2', address: 'Address 2, Delhi' },
  ],
  Bangalore: [
    { name: 'Branch 1', address: 'Address 1, Bangalore' },
    { name: 'Branch 2', address: 'Address 2, Bangalore' },
  ],
  // Add more cities and branches as needed
};

const Branches: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState<string>('Mumbai');
  const [branches, setBranches] = useState<Branch[]>(branchesData[selectedCity]);

  const handleCityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const city = e.target.value;
    setSelectedCity(city);
    setBranches(branchesData[city]); // Update branches based on selected city
  };

  return (
    <div className="text-center p-5 bg-white">
      <h1 className="text-3xl font-bold mb-5">Jewelry Shop Branches in India</h1>
      <select
        value={selectedCity}
        onChange={handleCityChange}
        className="mb-5 p-2 border border-gray-300 rounded"
      >
        {Object.keys(branchesData).map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>

      <div className="relative">
        <img
          src="https://media.istockphoto.com/id/590046136/vector/india-map-labelled-black.jpg?s=170667a&w=0&k=20&c=wVm0VOxoNgND-hJODa-SYsICR2wyYuunWaVXS-v3zb4="
          alt="India Map"
          className="w-[40%] h-auto mx-auto"
        />
        <div className="absolute top-5 left-5 z-10 text-white">
          {branches.map((branch, index) => (
            <div key={index} className="bg-black bg-opacity-50 mb-3 p-3 rounded-lg">
              <h3 className="text-lg font-semibold">{branch.name}</h3>
              <p>{branch.address}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Branches;
