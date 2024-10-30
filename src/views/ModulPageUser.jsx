import React from "react";
import ModuleCard from "../components/Atom/card/moduleCard";
import Navbar from "../components/organisms/Navbar";
import Footer from "../components/organisms/Footer";

const ModulPageUser = () => {
  const moduleData = [
    {
      thumbnail: "/assets/img/Modul-1.jpg",
      title: "Creative Program for Students",
      subtitle:
        "This program fosters student creativity, innovation, and professional skills...",
      pdfUrl: "https://example.com/pdf1",
    },
    {
      thumbnail: "/assets/img/Modul-2.jpg",
      title: "Advanced Coding Bootcamp",
      subtitle:
        "Learn advanced coding skills and prepare for tech industry roles...",
      pdfUrl: "https://example.com/pdf2",
    },
    {
      thumbnail: "/assets/img/Modul-3.jpg",
      title: "Data Science Essentials",
      subtitle:
        "An introduction to data science, analytics, and machine learning...",
      pdfUrl: "https://example.com/pdf3",
    },
    {
      thumbnail: "/assets/img/Modul-4.jpg",
      title: "Entrepreneurship Basics",
      subtitle:
        "Essential knowledge for budding entrepreneurs and innovators...",
      pdfUrl: "https://example.com/pdf4",
    },
    {
      thumbnail: "/assets/img/Modul-5.jpg",
      title: "Digital Marketing 101",
      subtitle:
        "Learn the fundamentals of digital marketing, SEO, and social media...",
      pdfUrl: "https://example.com/pdf5",
    },
    {
      thumbnail: "/assets/img/Modul-6.jpg",
      title: "UI/UX Design for Beginners",
      subtitle: "Start your journey in design with UI/UX fundamentals...",
      pdfUrl: "https://example.com/pdf6",
    },
    {
      thumbnail: "/assets/img/Modul-7.jpg",
      title: "Artificial Intelligence Basics",
      subtitle:
        "An introductory program on AI and its real-world applications...",
      pdfUrl: "https://example.com/pdf7",
    },
    {
      thumbnail: "/assets/img/Modul-8.jpg",
      title: "Project Management Essentials",
      subtitle: "Develop skills to manage and lead successful projects...",
      pdfUrl: "https://example.com/pdf8",
    },
    {
      thumbnail: "/assets/img/Modul-9.jpg",
      title: "Public Speaking and Communication",
      subtitle:
        "Boost your public speaking and effective communication skills...",
      pdfUrl: "https://example.com/pdf9",
    },
    {
      thumbnail: "/assets/img/Modul-10.jpg",
      title: "Financial Literacy for Students",
      subtitle:
        "Understand personal finance basics and smart money management...",
      pdfUrl: "https://example.com/pdf10",
    },
  ];

  return (
    <div class="w-full flex justify-center">
      <div class="flex min-w-[1024px] max-w-[1440px] w-full flex-col justify-center items-center">
        <Navbar />
        <section className="flex items-center content-center justify-center gap-1 pb-20 self-stretch flex-wrap">
          {moduleData.map((module, index) => (
            <ModuleCard
              key={index}
              thumbnail={module.thumbnail}
              title={module.title}
              subtitle={module.subtitle}
              pdfUrl={module.pdfUrl}
            />
          ))}
        </section>
        <Footer />
      </div>
    </div>
  );
};

export default ModulPageUser;
