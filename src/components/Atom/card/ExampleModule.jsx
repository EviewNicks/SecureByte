import React from "react";
import ModuleCard from "./moduleCard";

const ExampleModulCard = () => (
  <section className="module-card-container flex p-8 justify-center items-center content-center gap-4 flex-wrap w-full">
    <ModuleCard
      thumbnail="/assets/img/Modul-1.jpg"
      title="Creative Program for Students"
      subtitle="This program fosters student creativity, innovation, and professional skills..."
      pdfUrl="https://example.com/pdf"
    />
    <ModuleCard
      title="Another Program"
      pdfUrl="https://example.com/another-pdf"
    />
  </section>
);

export default ExampleModulCard;
