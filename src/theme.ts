"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#103CAB",
    },
    secondary: {
      main: "#FF0060",
    },
    success: {
      main: "#4F9DA6",
    },
  },
  typography: {
    fontFamily: "'Open Sans', sans-serif",
    button: {
      textTransform: "none",
    },
    h1: {
      fontFamily: '"Marcellus", serif',
    },
    h2: {
      fontFamily: '"Marcellus", serif',
    },
    h3: {
      fontFamily: '"Marcellus", serif',
    },
    h4: {
      fontFamily: '"Marcellus", serif',
    },
    h5: {
      fontFamily: '"Marcellus", serif',
    },
    h6: {
      fontFamily: '"Marcellus", serif',
    },
  },
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          width: "50%",
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          maxWidth: "500px",
          height: "350px",
          width: "100%",
          borderRadius: "8px",
          marginLeft: "12px",
          "&.Mui-selected": {
            backgroundColor: "#3572EF",
          },
        },
      },
    },
  },
});

export default theme;
