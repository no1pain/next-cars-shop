"use client";

import { HomePage } from "@/components/home";
import { Provider } from "react-redux";
import store from "../store/store";

export default function Home() {
  return (
    <Provider store={store}>
      <HomePage />
    </Provider>
  );
}
