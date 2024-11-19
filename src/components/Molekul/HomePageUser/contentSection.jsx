import React from "react";
import IntroductionCard from "../../Atom/card/introduction";
import { useMediaQuery } from "react-responsive";

const ContentSection = ({ imageSrc, title, description }) =>
{
  // Media query untuk mendeteksi mobile
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <section className="content-section flex flex-col md:flex-row px-4 md:px-10 justify-between items-center w-full gap-6 md:gap-4 lg:gap-10">
      {/* Left Content */}
      {!isMobile && (
        <div
          data-aos="zoom-in"
          className="left-content flex items-center justify-center gap-2.5 md:flex-grow w-full md:w-1/3 lg:w-1/2"
        >
          <div className="image-outer-wrapper flex p-4 items-center gap-2.5 lg:rounded-[24px_108px] md:rounded-[12px_64px] bg-gold-out">
            <img src={imageSrc} alt={title} className="w-40 md:w-48 lg:w-64 h-auto rounded-lg" />
          </div>
        </div>
      )}

      {/* Right Content */}
      <div data-aos="zoom-in" className=" right-content flex flex-col w-full md:w-2/3 lg:w-1/2 px-6 md:px-6 lg:px-10">
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
