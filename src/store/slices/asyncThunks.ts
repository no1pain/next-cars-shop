import { createAsyncThunk } from "@reduxjs/toolkit";
import { equipmentFilters } from "../../data/equipmentFilter";
import { typeFilters } from "../../data/typeFilter";

export const fetchEquipmentFilters = createAsyncThunk(
  "filters/fetchEquipmentFilters",
  async () => {
    return equipmentFilters;
  }
);

export const fetchTypeFilters = createAsyncThunk(
  "filters/fetchTypeFilters",
  async () => {
    return typeFilters;
  }
);
