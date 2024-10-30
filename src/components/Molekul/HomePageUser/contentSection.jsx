import React from "react";
import IntroductionCard from "../../Atom/card/introduction";

const ContentSection = ({ imageSrc, title, description }) => {
  return (
    <section className="content-section flex px-10 justify-between items-center">
      {/* Left Content */}
      <div className="left-content flex items-center gap-2.5 flex-grow w-full">
        <div className="image-outer-wrapper flex p-4 items-center gap-2.5 rounded-[24px_108px] bg-gold-out">
          <img src={imageSrc} alt={title} className="w-64 h-auto rounded-lg" />
        </div>
      </div>

      {/* Right Content */}
      <div className=" px-10 w-full">
        <IntroductionCard
          title="Program Kreativitas (PKM)"
          description="Program Kreativitas Mahasiswa (PKM) adalah program yang diselenggarakan
            oleh Direktorat Pendidikan Tinggi (Dikti) untuk mendorong mahasiswa
            mengembangkan kreativitas, inovasi, dan keahlian profesional. Program ini
            bertujuan untuk meningkatkan kualitas mahasiswa agar mampu berkontribusi
            secara akademis dan profesional di masyarakat. PKM memiliki tujuh
            kategori kegiatan: PKM-Penelitian, PKM-Penerapan Teknologi,
            PKM-Kewirausahaan, PKM-Pengabdian Masyarakat, PKM-Karsa Cipta,
            PKM-Artikel Ilmiah, dan PKM-Gagasan Tertulis. Sebagian besar program ini
            diperlombakan dalam Pekan Ilmiah Mahasiswa Nasional (PIMNAS)."
        />
      </div>
    </section>
  );
};

export default ContentSection;
