import CardList from "@/components/CarList";
import Filters from "@/components/Filters";
import InputForm from "@/components/InputForm";
import Wrapper from "@/components/Wrapper";
import React from "react";

export const HomePage = () => {
  return (
    <Wrapper>
      <div className="flex flex-row gap-[64px]">
        <section className="">
          <InputForm />
          <Filters />
        </section>
        <section className="w-full h-full">
          <CardList />
        </section>
      </div>
    </Wrapper>
  );
};
