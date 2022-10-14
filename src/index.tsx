import React from "react";
import { createRoot } from "react-dom/client";
import { NativeBaseProvider } from "native-base";

import App from "./components/App/App";
import { theme } from "./theme/theme";
import reportWebVitals from "./reportWebVitals";

const root = createRoot(document.getElementById("root"))

root.render(
  <React.StrictMode>
    <NativeBaseProvider theme={theme}>
      <App />
    </NativeBaseProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
