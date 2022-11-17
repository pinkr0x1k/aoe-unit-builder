import { createSlice } from "@reduxjs/toolkit";

const unitSlice = createSlice({
  name: "units",
  initialState: {
    isFetching: false,
    data: null,
    filteredData: null,
    error: false,
    filters: {
      age: "All",
      food: 0,
      wood: 0,
      gold: 0,
    },
    activeFilter: {
      wood: false,
      food: false,
      gold: false,
    },
  },
  // Reducers object is the bread and butter of slice.
  // Defining a reducer also defines a type and action.
  // The type will be `units/fetch`, using the pattern of `{name}/{key}`
  reducers: {
    fetch: (state) => {
      state.isFetching = true;
    },
    fetchSuccess: (state, action) => {
      state.isFetching = false;
      state.filteredData = state.data = action.payload;
    },
    fetchFail: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    filterUnits: (state, action) => {
      state.isFetching = true;
      if (action.payload.age) {
        state.filters.age = action.payload.age;
      }
      if (action.payload.wood) {
        state.filters.wood = action.payload.wood;
      }
      if (action.payload.food) {
        state.filters.food = action.payload.food;
      }
      if (action.payload.gold) {
        state.filters.gold = action.payload.gold;
      }
    },
    filterUnitsSuccess: (state, action) => {
      state.isFetching = false;
      state.filteredData = action.payload;
    },
    filterUnitsFail: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    setActiveFilters: (state, action) => {
      state.activeFilter.wood = !!action.payload.activeFilter.wood;
      state.activeFilter.food = !!action.payload.activeFilter.food;
      state.activeFilter.gold = !!action.payload.activeFilter.gold;
    },
  },
});

// Export actions for convenience when importing from other modules
export const selectData = (state) => state.units.filteredData;
export const selectBaseUnits = (state) => state.units.data;
export const selectFilters = (state) => state.units.filters;
export const selectActiveFilters = (state) => state.units.activeFilter;
export const selectIsFetching = (state) => state.units.isFetching;
export const selectHasError = (state) => state.units.error;

export const {
  filterUnits,
  filterUnitsSuccess,
  filterUnitsFail,
  fetch,
  fetchSuccess,
  fetchFail,
  setActiveFilters,
} = unitSlice.actions;
export default unitSlice.reducer;
