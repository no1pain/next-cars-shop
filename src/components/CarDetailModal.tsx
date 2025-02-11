import React from "react";

interface CarDetailModalProps {
  car: {
    name: string;
    image_path: string;
    description: string;
    location: string;
    price: string;
    rate: number;
    reviews: number;
  };
  onClose: () => void;
}

const CarDetailModal: React.FC<CarDetailModalProps> = ({ car, onClose }) => {
  const [activeTab, setActiveTab] = React.useState("features");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="fixed inset-0 bg-gray-700 bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-white p-10 rounded-lg w-[982px] h-[720px] flex flex-col">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-[1.75rem] leading-[1.75rem] font-semibold">
            {car.name}
          </h2>
          <button
            onClick={onClose}
            className="h-8 text-gray-500 hover:text-gray-700"
          >
            <img src="./images/close-window-icon.svg" alt="Close" />
          </button>
        </div>

        <div className="flex items-center">
          <img src="./images/star.svg" alt="Rating" className="w-5 h-5 mr-1" />
          <h3 className="text-lg underline font-medium">
            {car.rate} ({car.reviews} Reviews)
          </h3>
          <div className="ml-4 flex gap-1">
            <img src="./images/location-icon.svg" alt="" />
            <div className="text-[#101828]">{car.location}</div>
          </div>
        </div>

        <div className="text-lg mt-4 font-inter text-[24px] leading-[30px] text-left decoration-skip-ink-none font-medium text-[#101828]">
          €{car.price}
        </div>
        <div className="flex mt-6 gap-4">
          <img
            className="w-[290px] h-[310px] rounded-[10px] object-cover "
            src="./images/carpage-1.png"
            alt=""
          />
          <img
            className="w-[290px] h-[310px]rounded-[10px]"
            src="./images/carpage-22.png"
            alt=""
          />
          <img
            className="w-[290px] h-[310px] rounded-[10px]"
            src="./images/carpage-33.png"
            alt=""
          />
        </div>
        <p className="font-inter mt-6 text-[16px] font-normal leading-[24px] text-[#475467] text-left decoration-skip-ink-none">
          Embrace simplicity and freedom with the Mavericks panel truck, an
          ideal choice for solo travelers or couples seeking a compact and
          efficient way to explore the open roads. This no-frills yet reliable
          panel truck offers the essentials for a comfortable journey, making it
          the perfect companion for those who value simplicity and
          functionality.
        </p>

        <div className="flex mt-11 gap-10 h-12">
          <button
            onClick={() => handleTabClick("features")}
            className={`font-inter text-[20px] font-semibold leading-[24px] text-left ${
              activeTab === "features" ? "border-b-4 border-[#E44848]" : ""
            }`}
          >
            Features
          </button>
          <button
            onClick={() => handleTabClick("reviews")}
            className={`font-inter text-[20px] font-semibold leading-[24px] text-left ${
              activeTab === "reviews" ? "border-b-4 border-[#E44848]" : ""
            }`}
          >
            Reviews
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarDetailModal;
