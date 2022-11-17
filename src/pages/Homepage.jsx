import React from "react";
import { Card, CardMedia, Container, Stack, Typography } from "@mui/material";
import Footer from "../components/global/Footer";

const Homepage = () => {
  return (
    <React.Fragment>
      <Container
        disableGutters
        maxWidth="sm"
        component="main"
        sx={{ pt: 8, pb: 6 }}
      >
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Home Page
        </Typography>
        <Typography align="center" gutterBottom variant="h5" component="p">
          Welcome to Age of Empires Unit Builder App.
        </Typography>
        <Typography align="center" gutterBottom variant="h6" component="p">
          You can view and filter the units available in Age of Empires by
          visiting Units from the navigation bar.
        </Typography>
        <br />
        <Stack
          maxWidth="md"
          component="main"
          alignItems="center"
          justifyContent="center"
        >
          <Card sx={{ maxWidth: 300 }}>
            <CardMedia
              component="img"
              image="./age-of-empires.png"
              alt="img"
            />
          </Card>
        </Stack>
      </Container>
      <Footer />
    </React.Fragment>
  );
};

export default React.memo(Homepage);
