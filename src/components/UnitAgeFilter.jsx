import React, { useState } from "react";
import {
  FormLabel,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { filterUnits } from "../features/unitSlice";

const UnitAgeFilter = () => {
  const [alignment, setAlignment] = useState("All");
  const dispatch = useDispatch();

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    if (newAlignment !== null) {
      dispatch(filterUnits({ age: newAlignment }));
      setAlignment(newAlignment);
    }
  };
  return (
    <React.Fragment>
      <FormLabel sx={{ fontWeight: 800 }}>Ages</FormLabel>
      <ToggleButtonGroup
        color="primary"
        value={alignment}
        exclusive
        onChange={handleChange}
        aria-label="Ages"
      >
        <ToggleButton value="All">All</ToggleButton>
        <ToggleButton value="Dark">Dark</ToggleButton>
        <ToggleButton value="Feudal">Feudal</ToggleButton>
        <ToggleButton value="Castle">Castle</ToggleButton>
        <ToggleButton value="Imperial">Imperial</ToggleButton>
      </ToggleButtonGroup>
    </React.Fragment>
  );
};

export default UnitAgeFilter;
