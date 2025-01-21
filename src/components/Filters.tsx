"use client";

import React, { useState } from "react";
import { FilterButtons } from "./FilterButtons";
import VehicleType from "./VehicleType";

const Filters = () => {
  return (
    <div>
      <h3 className="mt-8 w-[360px] mb-2 text-[#10182899] font-inter text-base font-medium leading-6 text-left">
        Filters
      </h3>
      <h2 className="mt-[14px] ont-inter text-lg font-semibold leading-6 text-left decoration-underline decoration-skip-ink">
        Vehicle Equipment
      </h2>

      <hr className="w-[360px] border-t border-gray-300 mt-[24px]"></hr>

      <div className="mt-[24px]"></div>

      <FilterButtons />
      <h2 className="mt-8 ont-inter text-lg font-semibold leading-6 text-left decoration-underline decoration-skip-ink">
        Vehicle Equipment
      </h2>

      <hr className="w-[360px] border-t border-gray-300 mt-[24px]"></hr>

      <VehicleType />

      <button className="bg-[#E44848] mt-16 text-white p-2 rounded-full w-[173px] h-[56px]">
        Search
      </button>
    </div>
  );
};

export default Filters;
