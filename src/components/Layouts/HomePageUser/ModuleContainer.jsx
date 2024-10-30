// ModuleHome.jsx
import React from "react";
import HeadlineBoxLine from "../../Atom/Accesories/headlineBoxLine";
import ModuleSection from "../../Molekul/HomePageUser/modulSection";
import HeadlineButtonBox from "../../Molekul/HomePageUser/HeadlineButtonBox";

const ModuleContainer = () => {
  const modules = [
    {
      imageSrc: "/assets/img/Modul-1.jpg",
      altText: "Module 1 Image",
      title: "Program Kreativitas (PKM) - Modul 1",
      description:
        "Program Kreativitas Mahasiswa (PKM) adalah program yang diselenggarakan oleh Direktorat Pendidikan Tinggi (Dikti) untuk mendorong mahasiswa mengembangkan kreativitas, inovasi, dan keahlian profesional. Program ini bertujuan untuk meningkatkan kualitas mahasiswa agar mampu berkontribusi secara akademis dan profesional di masyarakat. PKM memiliki tujuh kategori kegiatan: PKM-Penelitian, PKM-Penerapan Teknologi, PKM-Kewirausahaan, PKM-Pengabdian Masyarakat, PKM-Karsa Cipta, PKM-Artikel Ilmiah, dan PKM-Gagasan Tertulis. Sebagian besar program ini diperlombakan dalam Pekan Ilmiah Mahasiswa Nasional (PIMNAS).",
      flowLinePosition: "start",
    },
    {
      imageSrc: "/assets/img/Modul-2.jpg",
      altText: "Module 2 Image",
      title: "Program Kreativitas (PKM) - Modul 2",
      description: "Deskripsi untuk modul 2...",
      flowLinePosition: "middle",
    },
    {
      imageSrc: "/assets/img/Modul-3.jpg",
      altText: "Module 3 Image",
      title: "Program Kreativitas (PKM) - Modul 3",
      description: "Deskripsi untuk modul 3...",
      flowLinePosition: "middle",
    },
    {
      imageSrc: "/assets/img/Modul-4.jpg",
      altText: "Module 4 Image",
      title: "Program Kreativitas (PKM) - Modul 4",
      description: "Deskripsi untuk modul 4...",
      flowLinePosition: "end",
    },
  ];

  return (
    <div className="module-page flex flex-col items-center">
      <HeadlineBoxLine
        text="Modul Pembelajaran"
        bgColor="bg-gold"
        textColor="text-secondary"
      />

      {modules.map((module, index) => (
        <ModuleSection
          key={index}
          imageSrc={module.imageSrc}
          altText={module.altText}
          title={module.title}
          description={module.description}
          flowLinePosition={module.flowLinePosition}
          isOdd={(index + 1) % 2 !== 0} // Cek ganjil atau genap
        />
      ))}

      <HeadlineButtonBox
        title="DATA SCIENCE MODULE"
        subtitle="BY DataTech Academy"
        buttonText="Modul CeyberSecurity"
        iconPosition="right" // Ikon di sebelah kanan
        arrowDirection="right"
      />

      {/* <HeadlineBox /> */}
    </div>
  );
};

export default ModuleContainer;
