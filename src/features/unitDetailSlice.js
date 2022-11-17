import { createSlice } from "@reduxjs/toolkit";

const unitDetailsSlice = createSlice({
  name: "unitDetails",
  initialState: {
    isFetching: false,
    data: null,
    error: false,
    selectedUnit: 0,
  },
  // Reducers object is the bread and butter of slice.
  // Defining a reducer also defines a type and action.
  // The type will be `units/fetch`, using the pattern of `{name}/{key}`
  reducers: {
    fetchUnitDetails: (state, action) => {
      state.isFetching = true;
      state.selectedUnit = action.payload.selectedUnit;
    },
    fetchUnitDetailsSuccess: (state, action) => {
      state.isFetching = false;
      state.data = action.payload;
    },
    fetchUnitDetailsFail: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

// Export actions for convenience when importing from other modules
export const selectUnitDetailsData = (state) => state.unitDetails.data;
export const selectSelectedUnitID = (state) => state.unitDetails.selectedUnit;
export const selectUnitDetailsIsFetching = (state) =>
  state.unitDetails.isFetching;
export const selectUnitDetailsHasError = (state) => state.unitDetails.error;

export const {
  fetchUnitDetails,
  fetchUnitDetailsSuccess,
  fetchUnitDetailsFail,
} = unitDetailsSlice.actions;
export default unitDetailsSlice.reducer;
