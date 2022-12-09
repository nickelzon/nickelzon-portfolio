import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

window.alert("This site is under development");
const create = React.createElement;

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(create(React.StrictMode, null, create(App)));
