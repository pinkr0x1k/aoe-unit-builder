import React from "react";
import {
  AppBar,
  createTheme,
  Link,
  ThemeProvider,
  Toolbar,
  Typography,
} from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const Navigation = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: "wrap" }}>
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            sx={{ flexGrow: 1, fontWeight: "bold" }}
          >
            Age Of Empires Unit Builder
          </Typography>
          <nav>
            <Link
              variant="button"
              color="text.primary"
              href="/"
              sx={{ my: 1, mx: 1.5, fontWeight: "bold" }}
            >
              Home
            </Link>
            <Link
              variant="button"
              color="text.primary"
              href="/units"
              sx={{ my: 1, mx: 1.5, fontWeight: "bold" }}
            >
              Units
            </Link>
          </nav>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default Navigation;
