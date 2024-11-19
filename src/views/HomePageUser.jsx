import React from "react";
import ResponsiveGrid from "../components/Layouts/ResponsiveGrid";
import Navbar from "../components/organisms/Navbar";
import
{
  HeaderContainer,
  ModuleContainer,
  NewsContainer,
  ProfileContainer,
} from "../components/Layouts/HomePageUser";

import Footer from "../components/organisms/Footer";

const HomePageUser = () =>
{
  return (
    <ResponsiveGrid >
      <Navbar />
      <HeaderContainer />
      <ModuleContainer />
      <NewsContainer />
      <ProfileContainer />
      <Footer />
    </ResponsiveGrid>
  );
};



export default HomePageUser;
