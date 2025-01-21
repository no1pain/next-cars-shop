import React from "react";
import CarItem from "./CarItem";
import data from "../../public/data.json";
import { Car } from "@/interfaces/car.interface";

const CardList: React.FC = () => {
  return (
    <div className="flex flex-wrap flex-col gap-4">
      {data.map((car: Car) => (
        <CarItem
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
      ))}
    </div>
  );
};

export default CardList;
