import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  typography: {
    fontFamily: "Poppins, Arial, sans-serif",
  },
});


export const themeInput = createTheme({
  typography: {
    fontFamily: "Poppins, Arial, sans-serif",
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          marginBottom:"10px",
          "& .MuiOutlinedInput-root": {
            color: "#125C00", // text color
            "& fieldset": {
              borderColor: "#167A00", // default border color
            },
            "&:hover fieldset": {
              borderColor: "black", // border on hover
            },
            "&.Mui-focused fieldset": {
              borderColor: "black", // border when focused
            },
          },
          "& .MuiInputLabel-root": {
            color: "#167A00", // label color
            "&.Mui-focused": {
              color: "black", // label when focused
            },
          },
          input: {
            color: "#125C00", // input text color
            fontFamily: "Poppins, sans-serif", // input text font
          },
        },
      },
    },
  },
});