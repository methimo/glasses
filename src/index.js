import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import AuthUserProvider from "./contexts/UserContext";

ReactDOM.render(
  <React.StrictMode>
    <AuthUserProvider>
      <App />
    </AuthUserProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
