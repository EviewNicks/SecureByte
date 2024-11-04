import React from "react";
import HeaderSection from "../../Molekul/HomePageUser/HeaderSection";
import ContentSection from "../../Molekul/HomePageUser/contentSection";

const IntroductionSection = () => {
  return (
    <section className="introduction-container flex flex-col justify-center items-center gap-8 py-6 w-full">
      <HeaderSection
        title="Introduction"
        subtitle="To SecureByte Edu"
        description="Selamat datang di SecureByte Edu, platform edukasi yang bertujuan meningkatkan kesadaran masyarakat umum tentang keamanan siber. Kami menyediakan beragam materi untuk membantu Anda memahami ancaman digital dan cara melindungi diri secara efektif. Secure Byte Edu menawarkan modul pembelajaran yang mudah diakses dan praktis, yang dirancang agar siapa saja, bahkan yang masih awam, dapat dengan cepat memahami pentingnya keamanan digital dalam kehidupan sehari-hari."
      />
      <ContentSection
        imageSrc="/assets/img/Logo.png"
        title="Program Kreativitas (PKM)"
        description="Program Kreativitas Mahasiswa (PKM) adalah program yang diselenggarakan oleh Direktorat Pendidikan Tinggi (Dikti) untuk mendorong mahasiswa mengembangkan kreativitas, inovasi, dan keahlian profesional. Program ini bertujuan untuk meningkatkan kualitas mahasiswa agar mampu berkontribusi secara akademis dan profesional di masyarakat. PKM memiliki tujuh kategori kegiatan: PKM-Penelitian, PKM-Penerapan Teknologi, PKM-Kewirausahaan, PKM-Pengabdian Masyarakat, PKM-Karsa Cipta, PKM-Artikel Ilmiah, dan PKM-Gagasan Tertulis. Sebagian besar program ini diperlombakan dalam Pekan Ilmiah Mahasiswa Nasional (PIMNAS)."
      />
    </section>
  );
};

export default IntroductionSection;
