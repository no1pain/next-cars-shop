"use client";

import React, { useState } from "react";

export const InputForm = () => {
  const [selectedLocation, setSelectedLocation] = useState("");
  const [filteredLocations, setFilteredLocations] = useState<string[]>([]);
  const [isFocused, setIsFocused] = useState(false);

  const locations = [
    "New York",
    "Los Angeles",
    "Chicago",
    "San Francisco",
    "Miami",
  ];

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSelectedLocation(value);

    const filtered = locations.filter((location) =>
      location.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredLocations(filtered);
  };

  const handleSelectLocation = (location: string) => {
    setSelectedLocation(location);
    setFilteredLocations([]);
    setIsFocused(false);
  };

  return (
    <div>
      <h2 className="w-[360px] mb-2 text-[#10182899] font-inter text-base font-medium leading-6 text-left">
        Location:
      </h2>
      <form>
        <div className="relative w-full">
          <img
            src="./images/map-pin.png"
            alt="Search Icon"
            className="absolute top-1/2 left-3 -translate-y-1/2 h-5 w-5 text-gray-400"
          />
          <input
            type="text"
            id="location"
            value={selectedLocation}
            onChange={handleChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setTimeout(() => setIsFocused(false), 100)} // Delay to allow click event
            placeholder="Start typing a location"
            className="w-[360px] pl-10 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {isFocused && filteredLocations.length > 0 && (
          <ul className="border mt-2 max-h-60 overflow-y-auto">
            {filteredLocations.map((location, index) => (
              <li
                key={index}
                onMouseDown={() => handleSelectLocation(location)} // Use onMouseDown
                className="cursor-pointer hover:bg-gray-200 p-2"
              >
                {location}
              </li>
            ))}
          </ul>
        )}
      </form>
    </div>
  );
};

export default InputForm;
