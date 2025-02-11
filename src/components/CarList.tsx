import React from "react";
import { useSelector } from "react-redux";
import CarItem from "./CarItem";
import { RootState } from "@/store/store";
import data from "../../public/data.json";
import { Car } from "@/interfaces/car.interface";

const CarList: React.FC = () => {
  const selectedFilters = useSelector(
    (state: RootState) => state.filters.filters
  );

  const filteredCars = data.filter((car: Car) => {
    const carFilters = car.filters.map((filter) => filter.toLowerCase());

    console.log(`Car: ${car.name}, Filters: ${car.filters.join(", ")}`);

    const matchesEquipmentFilters =
      selectedFilters.length === 0 ||
      selectedFilters.some((filter) =>
        carFilters.includes(filter.toLowerCase())
      );

    return matchesEquipmentFilters;
  });

  return (
    <div className="flex flex-wrap flex-col gap-4">
      {filteredCars.length > 0 ? (
        filteredCars.map((car: Car) => (
          <CarItem
            id={car.id}
            key={car.id}
            imageSrc={car.image_path}
            name={car.name}
            location={car.location}
            description={car.description}
            filters={car.filters}
            rate={car.rate}
            reviews={car.reviews}
            price={car.price}
          />
        ))
      ) : (
        <p>No cars match the selected filters</p>
      )}
    </div>
  );
};

export default CarList;
