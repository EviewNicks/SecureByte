import React from "react";
import modules from "../data/modules.json";
import ModuleCard from "../components/Atom/card/moduleCard";
import Navbar from "../components/organisms/Navbar";
import Footer from "../components/organisms/Footer";


const ModulPageUser = () =>
{
  return (
    <div className="w-full flex justify-center">
      <div className="flex min-w-[1024px] max-w-[1440px] w-full flex-col justify-center items-center">
        <Navbar />
        <section className="flex items-center content-center justify-center gap-1 pb-20 self-stretch flex-wrap">
          {modules.map((module, index) => (
            <ModuleCard
              key={index}
              thumbnail={module.imageSrc}
              title={module.title}
              subtitle={module.description}
              pdfUrl={module.link}
            />
          ))}
        </section>
        <Footer />
      </div>
    </div>
  );
};

export default ModulPageUser;