import React from "react";
import { createRoot } from "react-dom/client";
import "./style/index.css";
import Button from "./components/Atom/Button/ExampleButton";
import TextFieldExample from "./components/Atom/textField/exampleTextField";
import ExamplePagination from "./components/Atom/Selector/ExamplePagination";
import ExampleBreadCrumb from "./components/Atom/Selector/ExampleBreadCrumb";
import ExampleIntroductionCard from "./components/Atom/card/ExampleIntroduction";
import ExampleProfileCard from "./components/Atom/card/ExampleProfileCard";
import ExampleModulCard from "./components/Atom/card/ExampleModule";
import ExampleShapeLine from "./components/Atom/Accesories/ExampleShapeLine";
import ExampleHeadlineBoxLine from "./components/Atom/Accesories/ExampleHeadlineBoxLine";
import ExampleHeadlineBox from "./components/Atom/Accesories/ExampleHeadlineBox";
import ExampleFlowLine from "./components/Atom/Accesories/ExampleFlowLine";
import ExampleImageModulCard from "./components/Atom/card/ExampleImageModuleCard";
import ExampleTittleBox from "./components/Atom/Accesories/ExampleTittleBox";

const root = createRoot(document.getElementById("root"));
root.render(<TextFieldExample />);
