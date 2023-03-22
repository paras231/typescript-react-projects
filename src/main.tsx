import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { UserContextProvider } from "./context/TestContext";
import { ApiContextProvider } from "./context/ApiContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <UserContextProvider>
      <ApiContextProvider>
        <App />
      </ApiContextProvider>
    </UserContextProvider>
  </React.StrictMode>
);
