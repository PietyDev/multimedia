import { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";

import App from "App";

// contexts
import { LanguageProvider } from "context/LanguageProvider";
import { RouteProvider } from "context/RouterProvider";

// @mui components
import { ThemeProvider } from "@mui/material";

import light from "assets/theme/light";

// styles
import "./index.css";

const container = document.getElementById("root");

// Create a root.
const root = ReactDOMClient.createRoot(container);

// Initial render: Render an element to the root.
root.render(
  <StrictMode>
    <LanguageProvider>
      <RouteProvider>
        <ThemeProvider theme={light}>
          <App />
        </ThemeProvider>
      </RouteProvider>
    </LanguageProvider>
  </StrictMode>
);
