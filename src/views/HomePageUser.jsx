import React from "react";
import
{
  HeaderContainer,
  ModuleContainer,
  NewsContainer,
  ProfileContainer,
} from "../components/Layouts/HomePageUser";
import Navbar from "../components/organisms/Navbar";
import Footer from "../components/organisms/Footer";

const HomePageUser = () =>
{
  return (
    <div className="w-full flex justify-center">
      <div className="flex min-w-[1024px] max-w-[1440px] w-full flex-col justify-center items-center">
        <Navbar />
        <HeaderContainer />
        <ModuleContainer />
        <NewsContainer />
        <ProfileContainer />
        <Footer />
      </div>
    </div>
  );
};



export default HomePageUser;
