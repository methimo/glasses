import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import AuthUserProvider from "./contexts/UserContext";
import ChairInfoProvider from "./contexts/ChairInfoContext";

ReactDOM.render(
  <React.StrictMode>
    <ChairInfoProvider>
      <AuthUserProvider>
        <App />
      </AuthUserProvider>
    </ChairInfoProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
