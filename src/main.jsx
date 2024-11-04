import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";


console.log("Rendering React App...");

const root = createRoot(document.getElementById("root"));
root.render(<App />);
