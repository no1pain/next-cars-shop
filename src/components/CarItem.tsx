import React, { useState } from "react";
import { equipmentFilters } from "@/data/equipmentFilter";
import { typeFilters } from "@/data/typeFilter";
import { FavouriteButton } from "@/icons/FavouriteIcon";
import CarDetailModal from "./CarDetailModal";

interface CarItemProps {
  imageSrc: string;
  name: string;
  location: string;
  description: string;
  filters: string[];
  rate: number;
  reviews: number;
  price: string;
  id: number;
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
  id,
}) => {
  const allFilters = [...equipmentFilters, ...typeFilters];

  const filterIcons: { [key: string]: string } = allFilters.reduce(
    (acc, filter) => {
      acc[filter.label] = filter.imageSrc;
      return acc;
    },
    {} as { [key: string]: string }
  );

  const [isModalOpen, setIsModalOpen] = useState(false);

  const carDetails = {
    name,
    image_path: imageSrc,
    description,
    location,
    price,
    rate,
    reviews,
  };

  const handleShowMoreClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

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
              ({reviews} Reviews)
            </span>
          </div>
          <div className="flex align-center justify-center mt-[2px] gap-1 ml-4">
            <img src="./images/location-icon.svg" alt="" />
            <p className="text-sm text-nowrap text-gray-600">{location}</p>
          </div>
        </div>
        <p className="mt-6 text-sm line-clamp-1">{description}</p>
        <div className="flex flex-wrap gap-2 mt-6">
          {filters.map((filter, index) => (
            <span
              key={index}
              className="flex justify-center px-[18px] bg-gray-100 h-[44px] text-sm py-1 rounded-full items-center gap-1"
            >
              {filterIcons[filter] ? (
                <img
                  key={index}
                  src={filterIcons[filter]}
                  alt={`${filter}-icon`}
                  className="w-4 h-4"
                />
              ) : (
                <img
                  key={index}
                  src="/images/default-icon.svg"
                  alt="default-icon"
                  className="w-4 h-4"
                />
              )}
              {filter}
            </span>
          ))}
        </div>

        <button
          onClick={handleShowMoreClick}
          className="bg-[#E44848] text-white p-2 rounded-full w-[166px] h-[56px] mt-auto"
        >
          Show more
        </button>
      </div>

      {isModalOpen && (
        <CarDetailModal car={carDetails} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default CarItem;
