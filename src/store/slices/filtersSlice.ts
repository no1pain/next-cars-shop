import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FilterPayload {
  filterId: string;
}

interface FiltersState {
  filters: string[];
}

const initialState: FiltersState = {
  filters: [],
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    addFilter(state, action: PayloadAction<FilterPayload>) {
      const { filterId } = action.payload;
      if (!state.filters.includes(filterId)) {
        state.filters.push(filterId);
      }
    },
    removeFilter(state, action: PayloadAction<FilterPayload>) {
      const { filterId } = action.payload;
      state.filters = state.filters.filter((id) => id !== filterId);
    },
  },
});

export const { addFilter, removeFilter } = filtersSlice.actions;

export default filtersSlice.reducer;
