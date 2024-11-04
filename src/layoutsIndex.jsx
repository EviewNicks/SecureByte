import React from "react";
import { createRoot } from "react-dom/client";
import "./style/index.css";
import HeaderContainer from "./components/Layouts/HomePageUser/HeaderContainer";
import ModuleContainer from "./components/Layouts/HomePageUser/ModuleContainer";
import NewsContainer from "./components/Layouts/HomePageUser/NewsContainer";
import { ProfileContainer } from "./components/Layouts/HomePageUser";
import { FormCreateUserAccout } from "./components/Layouts/Form";
import {
  HomePageUser,
  ManageUser,
  ManageModul,
  ManageArticle,
  LoginPage,
  RegisterPage,
  ModulPageUser,
  CreateUserAccount,
  CreateModule,
} from "./views";

const root = createRoot(document.getElementById("root"));
root.render(<CreateModule />);
