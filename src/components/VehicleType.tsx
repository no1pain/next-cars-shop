import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFilter, removeFilter } from "../store/slices/filtersSlice";
import { RootState } from "@/store/store";
import { typeFilters } from "../data/typeFilter";

export const VehicleType = () => {
  const dispatch = useDispatch();
  const selectedFilters = useSelector(
    (state: RootState) => state.filters.filters
  );

  const handleButtonClick = (filterId: string) => {
    const category: "type" = "type";

    if (selectedFilters.includes(filterId)) {
      dispatch(removeFilter({ filterId }));
    } else {
      dispatch(addFilter({ filterId }));
    }
  };

  return (
    <div className="flex flex-wrap gap-2 w-full max-w-[360px]">
      {typeFilters.map(({ id, label, imageSrc }) => (
        <div
          key={id}
          onClick={() => handleButtonClick(id)}
          className={`flex cursor-pointer flex-col items-center w-[112px] h-[95px] p-[10px] rounded-lg ${
            selectedFilters.includes(id)
              ? "border border-[#E44848]"
              : "border border-[#ccc]"
          }`}
        >
          <img src={imageSrc} alt={label} className="w-8 h-8 mb-2" />
          <button className="w-full text-center">{label}</button>
        </div>
      ))}
    </div>
  );
};

export default VehicleType;
