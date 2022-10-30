import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import swal from "sweetalert";

swal("Announcement", "This is under development.");

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
