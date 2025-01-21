import { useState } from "react";
import { equipmentFilters } from "../data/equipmentFilter";

export const FilterButtons = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>("");

  const handleButtonClick = (filter: string) => {
    setSelectedFilter(selectedFilter === filter ? "" : filter);
  };

  return (
    <div className="flex flex-wrap gap-[10px] w-[360px]">
      {equipmentFilters.map(({ id, label, imageSrc }) => (
        <div
          key={id}
          onClick={() => handleButtonClick(id)}
          className={`flex cursor-pointer flex-col items-center w-[112px] h-[95px] p-2 rounded-lg ${
            selectedFilter === id
              ? "border border-[#E44848]"
              : "border border-[#ccc]"
          }`}
        >
          <img src={imageSrc} alt={id} className="w-8 h-8 mb-2" />
          <button className="w-full text-center">{label}</button>
        </div>
      ))}
    </div>
  );
};
