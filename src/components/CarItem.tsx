import { FavouriteButton } from "@/icons/FavouriteIcon";
import React from "react";

interface CarItemProps {
  imageSrc: string;
  name: string;
  location: string;
  description: string;
  filters: string[];
  rate: number;
  reviews: number;
  price: string;
}

const CarItem: React.FC<CarItemProps> = ({
  imageSrc,
  name,
  location,
  description,
  filters,
  rate,
  reviews,
  price,
}) => {
  return (
    <div className="flex gap-6 flex-row items-center border h-[358px] p-6 rounded-lg">
      <img
        src={imageSrc}
        alt={name}
        className="w-[290px] h-[310px] object-cover rounded object-left"
      />
      <div className="flex flex-col w-full h-full">
        <div className="flex w-full justify-between">
          <h3 className="text-xl font-semibold">{name}</h3>
          <div className="flex gap-[10px]">
            <h3 className="text-xl font-semibold">{price}</h3>
            <FavouriteButton />
          </div>
        </div>

        <div className="flex">
          <div className="flex">
            <img src="./images/star.svg" alt="star-icon" />
            <span className="font-semibold">{rate}</span>
            <span className="text-sm text-gray-500 mt-[2px]">
              ({reviews} reviews)
            </span>
          </div>
          <p className="text-sm mt-[2px] text-gray-600 ml-4">{location}</p>
        </div>
        <p className="mt-2 text-sm">{description}</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {filters.map((filter, index) => (
            <span key={index} className="bg-gray-200 text-sm px-2 py-1 rounded">
              {filter}
            </span>
          ))}
        </div>
        <button className="bg-[#E44848] text-white p-2 rounded-full w-[166px] h-[56px] mt-auto">
          Show more
        </button>
      </div>
    </div>
  );
};

export default CarItem;
