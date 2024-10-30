import React from "react";
import { createRoot } from "react-dom/client";
import "./style/index.css";
import ExampleLearningSection from "./components/organisms/Example/ExampleLearningSection";
import ModuleHome from "./components/organisms/HomePageUser/Module";
import NewsContainer from "./components/organisms/HomePageUser/News";
import ExampleProfileCard from "./components/organisms/HomePageUser/profileCard";
import Navbar from "./components/organisms/Navbar";
import Footer from "./components/organisms/Footer";

const root = createRoot(document.getElementById("root"));
root.render(<Footer />);
