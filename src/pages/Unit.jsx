import React from "react";
import {
  Container,
  Divider,
  FormLabel,
  Stack,
  Typography,
} from "@mui/material";
import UnitAgeFilter from "../components/UnitAgeFilter";
import UnitCostFilter from "../components/UnitCostFilter";
import UnitTable from "../components/UnitTable";

const Units = () => {
  return (
    <React.Fragment>
      <Container maxWidth="md" component="main" sx={{ pt: 8, pb: 6 }}>
        <Container component="div" sx={{ pt: 8, pb: 6 }}>
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Units Page
          </Typography>
        </Container>
        <Container component="div" sx={{ pt: 3, pb: 3 }}>
          <Stack spacing={2}>
            <UnitAgeFilter />
            <Divider light />
            <UnitCostFilter />
            <Divider light />
            <FormLabel sx={{ fontWeight: 800 }}>Units</FormLabel>
            <UnitTable />
          </Stack>
        </Container>
      </Container>
    </React.Fragment>
  );
};

export default Units;
