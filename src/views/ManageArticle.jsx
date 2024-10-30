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
const rowsArticle = [
  {
    thumbnail: "/path/to/image1.jpg",
    title: "Pengembangan Infrastruktur di Asia Tenggara",
    date: "Oct 8, 2024",
    views: 8,
  },
  {
    thumbnail: "/path/to/image2.jpg",
    title: "Teknologi AI dalam Dunia Pendidikan",
    date: "Oct 9, 2024",
    views: 14,
  },
  {
    thumbnail: "/path/to/image3.jpg",
    title: "Perubahan Iklim dan Dampaknya",
    date: "Oct 10, 2024",
    views: 10,
  },
  {
    thumbnail: "/path/to/image4.jpg",
    title: "Keamanan Siber dalam Infrastruktur Digital",
    date: "Oct 11, 2024",
    views: 20,
  },
  {
    thumbnail: "/path/to/image5.jpg",
    title: "Blockchain untuk Keamanan Data",
    date: "Oct 12, 2024",
    views: 25,
  },
  {
    thumbnail: "/path/to/image6.jpg",
    title: "Pengaruh Teknologi Terhadap Ekonomi Global",
    date: "Oct 13, 2024",
    views: 30,
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
        text="Create Article"
        shape="Circle"
        size="large"
        primary={false}
        onClick={handleClick}
        withIconRight={<ArrowRight color="#FFF0D1" />}
      />
      <Table headers={headers} rows={rowsArticle} isModulTable={true} />
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default ManageUser;
