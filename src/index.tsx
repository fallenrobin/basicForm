import React, { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
  },
});

import App from "./App";

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);

root.render(
  <StrictMode>
    <ThemeProvider theme={theme}><App /></ThemeProvider>
  </StrictMode>
);
