import React, { useEffect } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import
{
  HomePageUser,
  ManageUser,
  ManageModul,
  ManageArticle,
  LoginPage,
  RegisterPage,
  ModulPageUser,
  ArticlePageUser,
  CreateUserAccount,
  CreateModule,
  CreateArticle,
  Dashboard
} from "./views";
import ScrollToTop from "./services/ScrollToTop";
import Aos from "aos";
import "aos/dist/aos.css";
import "./style/index.css";

const App = () =>
{
  useEffect(() =>
  {
    Aos.init({ duration: 1500, once: true });
    window.scrollTo(0, 0); // Scroll ke atas ketika halaman dimuat
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/" element={<HomePageUser />} />
        <Route path="/manage-user" element={<ManageUser />} />
        <Route path="/manage-modul" element={<ManageModul />} />
        <Route path="/manage-article" element={<ManageArticle />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/modul-page" element={<ModulPageUser />} />
        <Route path="/article-page" element={<ArticlePageUser />} />
        <Route path="/create-user-account" element={<CreateUserAccount />} />
        <Route path="/create-modul" element={<CreateModule />} />
        <Route path="/create-article" element={<CreateArticle />} />
      </Routes>
    </Router>
  );
};

export default App;
