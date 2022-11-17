import {Container, Grid, Typography} from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <React.Fragment>
      <Container
        maxWidth="md"
        component="footer"
        sx={{
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          mt: 8,
          py: [3, 6],
        }}
      >
        <Grid container justifyContent="space-evenly">
          <Typography
            variant="h8"
            color="text.primary"
            align="center"
            gutterBottom
            component="span"
          >
            This App built with react, react-redux (saga), react-router and
            material-ui.
          </Typography>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default React.memo(Footer);
