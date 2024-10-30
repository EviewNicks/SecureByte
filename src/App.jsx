import React from "react";
import { createRoot } from "react-dom/client";
import "./style/index.css";
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
root.render(<LoginPage />);
