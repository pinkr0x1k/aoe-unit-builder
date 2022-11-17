import UnitReducer from "./unitSlice";
import unitDetailsReducer from "./unitDetailSlice";

export const reducer = {
  units: UnitReducer,
  unitDetails: unitDetailsReducer,
};
