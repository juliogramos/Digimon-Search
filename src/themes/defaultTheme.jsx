import { createTheme } from "@mui/material";
import bgImg from "../assets/bg.png";

const defaultSpacing = 8;

const defaultTheme = createTheme({
  spacing: defaultSpacing,
  palette: {
    primary: {
      main: "#1251d0",
    },
    secondary: {
      main: "#2e74c9",
    },
    error: {
      main: "#ff0000",
    },
  },
  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
    h1: {
      fontSize: "2.1em",
      letterSpacing: "0.18em",
      fontWeight: 600,
      marginLeft: 4,
      marginRight: 4,
      textAlign: "center",
      color: "primary.main",
    },
    h2: {
      fontSize: "1.5em",
      fontWeight: 600,
    },
    h3: {
      fontSize: "1.25rem",
      fontWeight: 600,
      marginLeft: 4,
      marginRight: 4,
      textAlign: "center",
      color: "primary.main",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          height: "100%",
        },
        body: {
          height: "100%",
          background: `#d3dbff url(${bgImg}) repeat left top`,
          backgroundSize: `${2640 / 1.375}px auto`,
          "@keyframes bgAnim": {
            "0%": {
              backgroundPosition: "left 0 top 0",
            },
            "100%": {
              backgroundPosition: `left ${2640 / 1.375}px top ${992 / 1.375}px`,
            },
          },
          animation: "bgAnim 40s infinite linear",
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          height: "100%",
          display: "flex",
          flexDirection: "column",
          gap: 2 * defaultSpacing,
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
          p: 1 * defaultSpacing,
          margin: "0 auto",
        },
      },
    },
  },
});

export default defaultTheme;
