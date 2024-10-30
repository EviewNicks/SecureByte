import React, { useState } from "react";
import Pagination from "../components/Atom/Selector/pagination";
import Navbar from "../components/organisms/Navbar";
import { Table } from "../components/Molekul/table";
import ButtonVariant from "../components/Atom/Button/Button";
import { ArrowRight } from "../components/Atom/icons/arrow";

const handleClick = () => {
  alert("Kita masuk ke halaman pembuatan account");
  window.location.href = "../src/Create-user-account.html";
};

const headers = ["Thumbnail", "Title", "Date", "Views"];
const rowsModul = [
  {
    thumbnail: "/path/to/image1.jpg",
    title: "Kerja sama antara kemindikbud dengan cyber security",
    date: "23 Juni 2024",
    views: 14,
  },
  {
    thumbnail: "/path/to/image2.jpg",
    title: "Modul Teknologi Informasi Terbaru",
    date: "01 Mei 2024",
    views: 20,
  },
  {
    thumbnail: "/path/to/image3.jpg",
    title: "Panduan Dasar Jaringan Komputer",
    date: "10 Juli 2023",
    views: 33,
  },
  {
    thumbnail: "/path/to/image4.jpg",
    title: "Pengenalan Cloud Computing untuk Pemula",
    date: "15 Maret 2024",
    views: 50,
  },
  {
    thumbnail: "/path/to/image5.jpg",
    title: "Cybersecurity Awareness",
    date: "05 Januari 2024",
    views: 42,
  },
  {
    thumbnail: "/path/to/image6.jpg",
    title: "Mengelola Database dengan SQL",
    date: "12 September 2023",
    views: 28,
  },
  {
    thumbnail: "/path/to/image7.jpg",
    title: "Machine Learning dan Implementasinya",
    date: "20 Februari 2024",
    views: 35,
  },
  {
    thumbnail: "/path/to/image8.jpg",
    title: "Membangun Website dengan HTML dan CSS",
    date: "28 Oktober 2023",
    views: 67,
  },
  {
    thumbnail: "/path/to/image9.jpg",
    title: "Belajar Python dari Nol",
    date: "18 November 2023",
    views: 120,
  },
  {
    thumbnail: "/path/to/image10.jpg",
    title: "Keamanan Aplikasi Web",
    date: "09 Agustus 2023",
    views: 75,
  },
];

const ManageUser = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 20;

  const handlePageChange = (page) => {
    setCurrentPage(page);
    console.log("Current page:", page);
  };

  return (
    <div className="table-container flex min-w-[1024px] px-20 flex-col justify-center items-end gap-2 flex-grow self-stretch">
      <Navbar />
      <ButtonVariant
        text="Create Modul"
        shape="Circle"
        size="large"
        primary={false}
        onClick={handleClick}
        withIconRight={<ArrowRight color="#FFF0D1" />}
      />
      <Table headers={headers} rows={rowsModul} isModulTable={true} />
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default ManageUser;
