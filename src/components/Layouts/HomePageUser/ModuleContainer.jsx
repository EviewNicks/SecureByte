// ModuleHome.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import modules from "../../../data/modules.json";

import HeadlineBoxLine from "../../Atom/Accesories/headlineBoxLine";
import ModuleSection from "../../Molekul/HomePageUser/modulSection";
import HeadlineButtonBox from "../../Molekul/HomePageUser/HeadlineButtonBox";

const ModuleContainer = () =>
{

  const navigate = useNavigate();

  const handleNavigate = () =>
  {
    navigate("/modul-page");
  };

  const latestModules = modules
    .sort((a, b) => new Date(b.UpdateAt) - new Date(a.UpdateAt))
    .slice(0, 4);

  return (
    <div className="lg:col-span-12 md:col-span-6 sm:col-span-4 px-4 md:px-10 lg:px-20 pb-20 flex flex-col items-center">
      <HeadlineBoxLine
        text="Modul Pembelajaran"
        bgColor="bg-gold"
        textColor="text-secondary"
      />

      {latestModules.map((module, index) =>
      {
        const flowLinePosition =
          index === 0 ? "start" : index === latestModules.length - 1 ? "end" : "middle";

        return (
          <ModuleSection
            key={index}
            imageSrc={module.imageSrc}
            altText={module.altText}
            title={module.title}
            description={module.description}
            flowLinePosition={flowLinePosition}
            isOdd={(index + 1) % 2 !== 0} // Cek ganjil atau genap
            pdfLink={module.link} // Tambahkan link dari JSON
          />
        );
      })}

      <HeadlineButtonBox
        title="DATA SCIENCE MODULE"
        subtitle="BY DataTech Academy"
        buttonText="Modul CeyberSecurity"
        iconPosition="right" // Ikon di sebelah kanan
        arrowDirection="right"
        onClick={handleNavigate}
      />

      {/* <HeadlineBox /> */}
    </div>
  );
};

ModuleContainer.propTypes = {
  modules: PropTypes.arrayOf(
    PropTypes.shape({
      imageSrc: PropTypes.string.isRequired,
      altText: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      flowLinePosition: PropTypes.oneOf(["start", "middle", "end"]),
    })
  ),
};

export default ModuleContainer;
