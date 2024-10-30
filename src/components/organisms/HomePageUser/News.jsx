import React from "react";
import NewsSection from "../../Molekul/HomePageUser/newsSection";

const NewsOrganism = () => {
  // Data berita dengan isi yang berbeda-beda untuk setiap item
  const newsData = [
    {
      title: "Fiat x WSOT: Trade and Win Big!",
      description:
        "Jangan lewatkan kesempatan untuk memenangkan hadiah menarik dalam kompetisi perdagangan terbaru dari Fiat!",
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
  );
};

export default NewsOrganism;
