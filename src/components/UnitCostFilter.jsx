import React, { useEffect, useState } from "react";
import {
  FormLabel,
  Slider,
  FormControlLabel,
  Checkbox,
  Grid,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { filterUnits, setActiveFilters } from "../features/unitSlice";

const marks = [
  {
    value: 0,
    label: "0",
  },
  {
    value: 200,
    label: "200",
  },
];

const UnitCostFilter = () => {
  const [checkedWood, setCheckedWood] = useState(false);
  const [checkedFood, setCheckedFood] = useState(false);
  const [checkedGold, setCheckedGold] = useState(false);
  const [valueWoodSlider, setValueWoodSlider] = useState(0);
  const [valueFoodSlider, setValueFoodSlider] = useState(0);
  const [valueGoldSlider, setValueGoldSlider] = useState(0);

  const dispatch = useDispatch();

  const handleChangeWoodSlider = (event: Event, newValue: number | 0) => {
    if (checkedWood) {
      setValueWoodSlider(newValue);
      dispatch(filterUnits({ wood: newValue }));
    }
  };
  const handleChangeFoodSlider = (event: Event, newValue: number | 0) => {
    if (checkedFood) {
      setValueFoodSlider(newValue);
      dispatch(filterUnits({ food: newValue }));
    }
  };
  const handleChangeGoldSlider = (event: Event, newValue: number | 0) => {
    if (checkedGold) {
      setValueGoldSlider(newValue);
      dispatch(filterUnits({ gold: newValue }));
    }
  };
  const handleChangeWood = (
    event: React.ChangeEvent<HTMLInputElement>,
    type: type
  ) => {
    setCheckedWood(event.target.checked);
    if (checkedWood) {
      setValueWoodSlider(0);
    }
  };
  const handleChangeFood = (
    event: React.ChangeEvent<HTMLInputElement>,
    type: type
  ) => {
    setCheckedFood(event.target.checked);
    if (checkedFood) {
      setValueFoodSlider(0);
    }
  };
  const handleChangeGold = (
    event: React.ChangeEvent<HTMLInputElement>,
    type: type
  ) => {
    setCheckedGold(event.target.checked);
    if (checkedGold) {
      setValueGoldSlider(0);
    }
  };
  useEffect(() => {
    dispatch(
      setActiveFilters({
        activeFilter: {
          wood: checkedWood,
          food: checkedFood,
          gold: checkedGold,
        },
      })
    );
  });

  return (
    <React.Fragment>
      <FormLabel sx={{ fontWeight: 800 }}>Costs</FormLabel>
      <Grid container>
        <Grid item xs>
          <FormControlLabel
            control={
              <Checkbox checked={checkedWood} onChange={handleChangeWood} />
            }
            labelPlacement="end"
            label="Wood"
          />
        </Grid>
        <Grid item xs={10}>
          <Slider
            sx={{
              width: 300,
              color: "#b26500",
            }}
            getAriaLabel={() => "Minimum distance"}
            step={1}
            marks={marks}
            min={0}
            max={200}
            value={valueWoodSlider}
            onChange={handleChangeWoodSlider}
            valueLabelDisplay="auto"
            disableSwap
          />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs>
          <FormControlLabel
            control={
              <Checkbox checked={checkedFood} onChange={handleChangeFood} />
            }
            labelPlacement="end"
            label="Food"
          />
        </Grid>
        <Grid item xs={10}>
          <Slider
            sx={{
              color: "#f30835",
              width: 300,
            }}
            aria-label="Always visible"
            defaultValue={0}
            marks={marks}
            step={1}
            min={0}
            max={200}
            value={valueFoodSlider}
            onChange={handleChangeFoodSlider}
            valueLabelDisplay="auto"
          />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs>
          <FormControlLabel
            control={
              <Checkbox checked={checkedGold} onChange={handleChangeGold} />
            }
            labelPlacement="end"
            label="Gold"
          />
        </Grid>
        <Grid item xs={10}>
          <Slider
            sx={{
              color: "#ffcf33",
              width: 300,
            }}
            aria-label="Always visible"
            defaultValue={0}
            step={1}
            marks={marks}
            min={0}
            max={200}
            value={valueGoldSlider}
            onChange={handleChangeGoldSlider}
            valueLabelDisplay="auto"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default UnitCostFilter;
