// ModuleHome.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import HeadlineBoxLine from "../../Atom/Accesories/headlineBoxLine";
import NewsSection from "../../Molekul/HomePageUser/newsSection";
import HeadlineButtonBox from "../../Molekul/HomePageUser/HeadlineButtonBox";

const NewsContainer = () =>
{
  const navigate = useNavigate();

  const handleNavigateArticle = () =>
  {
    navigate("/article-page");
  };

  const newsData = [
    {
      title:
        "Fiat x WSOT: Trade and Win Big! and the end because is really healthy and now is online directly",
      description:
        "Jangan lewatkan kesempatan untuk memenangkan hadiah menarik dalam kompetisi perdagangan terbaru dari Fiat! ajsjias jasiaj ajsjaisj ",
      datetime: "2024-10-07",
      formattedDate: "Oct 7, 2024",
      showBadge: true,
      badgeText: "Top",
      imageUrl: "/assets/img/Modul-1.jpg",
    },
    {
      title: "Pengembangan Infrastruktur di Asia Tenggara",
      description:
        "Proyek besar infrastruktur sedang berlangsung di beberapa negara Asia Tenggara untuk meningkatkan konektivitas regional.",
      datetime: "2024-10-08",
      formattedDate: "Oct 8, 2024",
      showBadge: false, // Tidak menampilkan badge
      imageUrl: "/assets/img/Modul-2.jpg",
    },
    {
      title: "Teknologi AI dalam Dunia Pendidikan",
      description:
        "Penerapan teknologi kecerdasan buatan di bidang pendidikan membawa perubahan signifikan pada metode pengajaran.",
      datetime: "2024-10-09",
      formattedDate: "Oct 9, 2024",
      showBadge: true,
      badgeText: "New",
      badgeBgColor: "bg-blue-500/10",
      badgeTextColor: "text-info",
      imageUrl: "/assets/img/Modul-3.jpg",
    },
    {
      title: "Perubahan Iklim dan Dampaknya",
      description:
        "Fenomena perubahan iklim semakin terasa dengan adanya bencana alam yang lebih sering terjadi di berbagai belahan dunia.",
      datetime: "2024-10-10",
      formattedDate: "Oct 10, 2024",
      showBadge: false, // Tidak menampilkan badge
      imageUrl: "/assets/img/Modul-4.jpg",
    },
    {
      title: "Inovasi Terbaru di Bidang Kesehatan",
      description:
        "Penemuan teknologi kesehatan terbaru diharapkan mampu meningkatkan kualitas hidup masyarakat.",
      datetime: "2024-10-11",
      formattedDate: "Oct 11, 2024",
      showBadge: true,
      badgeText: "Featured",
      badgeBgColor: "bg-green-500/10",
      badgeTextColor: "text-succ",
      imageUrl: "/assets/img/Modul-5.jpg",
    },
  ];

  return (
    <section className="lg:col-span-12 md:col-span-6 sm:col-span-4 px-4 md:px-10 lg:px-20 pb-20 flex flex-col items-center gap-20">
      <HeadlineBoxLine
        text="Modul Pembelajaran"
        bgColor="bg-gold"
        textColor="text-secondary"
      />
      <section className="news-box flex flex-col items-center gap-4">
        {newsData.map((newsItem, index) => (
          <NewsSection
            key={index}
            title={newsItem.title}
            description={newsItem.description}
            datetime={newsItem.datetime}
            formattedDate={newsItem.formattedDate}
            showBadge={newsItem.showBadge}
            badgeText={newsItem.badgeText}
            badgeBgColor={newsItem.badgeBgColor}
            badgeTextColor={newsItem.badgeTextColor}
            imageUrl={newsItem.imageUrl}
          />
        ))}
      </section>

      <HeadlineButtonBox
        title="DATA SCIENCE MODULE"
        subtitle="BY DataTech Academy"
        buttonText="Modul CeyberSecurity"
        iconPosition="right" // Ikon di sebelah kanan
        arrowDirection="right"
        onClick={handleNavigateArticle}
      />
      {/* <HeadlineBox /> */}
    </section>
  );
};

export default NewsContainer;
