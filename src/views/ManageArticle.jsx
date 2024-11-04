import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Pagination from "../components/Atom/Selector/pagination";
import Navbar from "../components/organisms/Navbar";
import { Table } from "../components/Molekul/table";
import ButtonVariant from "../components/Atom/Button/Button";
import { ArrowRight } from "../components/Atom/icons/arrow";

const headers = ["Thumbnail", "Title", "Date", "Views"];
const rowsArticle = [
  {
    thumbnail: "/assets/img/Modul-1.jpg",
    title: "Pengembangan Infrastruktur di Asia Tenggara",
    date: "Oct 8, 2024",
    views: 8,
  },
  {
    thumbnail: "/assets/img/Modul-1.jpg",
    title: "Teknologi AI dalam Dunia Pendidikan",
    date: "Oct 9, 2024",
    views: 14,
  },
  {
    thumbnail: "/assets/img/Modul-2.jpg",
    title: "Perubahan Iklim dan Dampaknya",
    date: "Oct 10, 2024",
    views: 10,
  },
  {
    thumbnail: "/assets/img/Modul-4.jpg",
    title: "Keamanan Siber dalam Infrastruktur Digital",
    date: "Oct 11, 2024",
    views: 20,
  },
  {
    thumbnail: "/assets/img/Modul-3.jpg",
    title: "Blockchain untuk Keamanan Data",
    date: "Oct 12, 2024",
    views: 25,
  },
  {
    thumbnail: "/assets/img/Modul-2.jpg",
    title: "Pengaruh Teknologi Terhadap Ekonomi Global",
    date: "Oct 13, 2024",
    views: 30,
  },
  {
    thumbnail: "/assets/img/Modul-5.jpg",
    title: "Dampak Sosial Media pada Masyarakat",
    date: "Oct 14, 2024",
    views: 15,
  },
  {
    thumbnail: "/assets/img/Modul-6.jpg",
    title: "Inovasi di Bidang Energi Terbarukan",
    date: "Oct 15, 2024",
    views: 12,
  },
  // Tambahkan lebih banyak data jika diperlukan
];

const ITEMS_PER_PAGE = 8;

const ManageArticle = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);

  // Hitung total halaman
  const totalPages = Math.ceil(rowsArticle.length / ITEMS_PER_PAGE);

  // Ambil data yang sesuai untuk halaman saat ini
  const currentArticleData = rowsArticle.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const onNavigateArticle = () => {
    navigate("/create-article");
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    console.log("Current page:", page);
  };

  return (
    <div className="table-container flex min-w-[1024px] px-20 flex-col justify-center items-end gap-2 flex-grow self-stretch">
      <Navbar />
      <ButtonVariant
        text="Create Article"
        shape="Circle"
        size="large"
        primary={false}
        withIconRight={<ArrowRight color="#FFF0D1" />}
        onClick={onNavigateArticle}
      />
      <Table headers={headers} rows={currentArticleData} isModulTable={true} />
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default ManageArticle;
