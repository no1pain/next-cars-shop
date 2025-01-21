import { useState } from "react";
import { typeFilters } from "@/data/typeFilter";

export const VehicleType = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>("");

  const handleButtonClick = (filterId: string) => {
    setSelectedFilter(filterId);
  };

  return (
    <div className="flex flex-wrap flex-col gap-[10px] mt-6 w-[360px]">
      <div className="flex gap-[10px]">
        {typeFilters.map((filter) => (
          <div
            onClick={() => handleButtonClick(filter.id)}
            key={filter.id}
            className={`flex cursor-pointer flex-col items-center w-[112px] h-[95px] p-2 rounded-lg ${
              selectedFilter === filter.id
                ? "border border-[#E44848]"
                : "border border-[#ccc]"
            }`}
          >
            <img
              src={filter.image}
              alt={filter.label}
              className="w-8 h-8 mb-2"
            />
            <button className="w-full text-center">{filter.label}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VehicleType;
