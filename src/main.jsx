import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { AuthContextProvider } from "./context/Auth";

console.log("Rendering React App...");

const root = createRoot(document.getElementById("root"));
root.render(
    <AuthContextProvider>
        < App />
    </AuthContextProvider>
);
