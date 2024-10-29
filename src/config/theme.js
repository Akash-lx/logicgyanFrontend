import { createTheme } from "@mui/material/styles";

// Create a custom theme with line-height for all headings
const theme = createTheme({
  typography: {
    fontFamily: ` 'Martel Sans', serif`,
    h1: {
      fontSize: "2rem",
      lineHeight: 1.2, // Line-height for h1
      "@media (min-width:600px)": {
        fontSize: "2.5rem",
      },
      "@media (min-width:900px)": {
        fontSize: "3rem",
      },
      "@media (min-width:1200px)": {
        fontSize: "3.5rem",
      },
    },
    h2: {
      fontSize: "1.75rem",
      lineHeight: 1.1, // Line-height for h2
      "@media (min-width:600px)": {
        fontSize: "2.25rem",
      },
      "@media (min-width:900px)": {
        fontSize: "2.75rem",
      },
      "@media (min-width:1200px)": {
        fontSize: "3.25rem",
      },
    },
    h3: {
      fontSize: "1.5rem",
      lineHeight: 1, // Line-height for h3
      "@media (min-width:600px)": {
        fontSize: "2rem",
      },
      "@media (min-width:900px)": {
        fontSize: "2.5rem",
      },
      "@media (min-width:1200px)": {
        fontSize: "3rem",
      },
    },
    h4: {
      fontSize: "1.25rem",
      lineHeight: 1, // Line-height for h4
      "@media (min-width:600px)": {
        fontSize: "1.75rem",
      },
      "@media (min-width:900px)": {
        fontSize: "2.25rem",
      },
      "@media (min-width:1200px)": {
        fontSize: "2.75rem",
      },
    },
    h5: {
      fontSize: "1rem",
      lineHeight: 1, // Line-height for h5
      "@media (min-width:600px)": {
        fontSize: "1.5rem",
      },
      "@media (min-width:900px)": {
        fontSize: "1.75rem",
      },
      "@media (min-width:1200px)": {
        fontSize: "2rem",
      },
    },
    h6: {
      fontSize: "0.875rem",
      lineHeight: 1, // Line-height for h6
      "@media (min-width:600px)": {
        fontSize: "1.25rem",
      },
      "@media (min-width:900px)": {
        fontSize: "1.5rem",
      },
      "@media (min-width:1200px)": {
        fontSize: "1.75rem",
      },
    },
  },
});

export default theme;
