import React, { useState } from "react";

const Pagination = ({ totalPages, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [lastClicked, setLastClicked] = useState(null); // State untuk memantau tombol terakhir yang diklik

  // Fungsi untuk mengubah halaman dan mengupdate state
  const handlePageClick = (page) => {
    setCurrentPage(page);
    setLastClicked(page);
    onPageChange(page);
  };

  // Fungsi untuk tombol sebelumnya
  const handlePreviousClick = () => {
    if (currentPage > 1) {
      handlePageClick(currentPage - 1);
    }
  };

  // Fungsi untuk tombol berikutnya
  const handleNextClick = () => {
    if (currentPage < totalPages) {
      handlePageClick(currentPage + 1);
    }
  };

  // Fungsi untuk mengatur halaman yang akan ditampilkan dengan elipsis
  const getPageNumbers = () => {
    const pageNumbers = [];
    if (totalPages <= 5) {
      // Jika halaman kurang dari 5, tampilkan semua
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      // Jika lebih dari 5, tampilkan logika elipsis
      pageNumbers.push(1);
      if (currentPage > 3) {
        pageNumbers.push("...");
      }

      const startPage = Math.max(2, currentPage - 1);
      const endPage = Math.min(totalPages - 1, currentPage + 1);

      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }

      if (currentPage < totalPages - 2) {
        pageNumbers.push("...");
      }
      pageNumbers.push(totalPages);
    }
    return pageNumbers;
  };

  return (
    <div className="flex py-4 justify-center items-center gap-4 self-stretch">
      {/* Tombol Panah Kiri */}
      <button
        title="pagination"
        type="button"
        onClick={handlePreviousClick}
        className={`flex px-2 py-0.5 flex-col justify-center items-center self-stretch rounded ${lastClicked === "previous" ? "bg-blackLayer-1 text-secondary" : "bg-secondary text-primary"} hover:bg-blackLayer-1 hover:border-2 hover:border-blackLayer-4 active:bg-whiteLayer-3 active:text-secondary active:border-2 transition-transform duration-300 ease-in-out`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        >
          <path d="M11 7L6 12L11 17" />
          <path d="M17 7L12 12L17 17" />
        </svg>
      </button>

      {/* Nomor Halaman */}
      {getPageNumbers().map((page, index) => (
        <button
          key={index}
          title="pagination"
          type="button"
          onClick={() => typeof page === "number" && handlePageClick(page)}
          className={`flex px-2 py-0.5 flex-col justify-center items-center self-stretch rounded ${
            page === currentPage
              ? "bg-whiteLayer-3 text-secondary border-2 border-blackLayer-0"
              : "bg-secondary text-primary"
          } ${lastClicked === page ? " focus:outline-2 focus:outline-blackLayer-0" : ""} hover:bg-blackLayer-1 hover:border-2 hover:border-blackLayer-4  focus:border-blackLayer-0 transition-transform duration-300 ease-in-out`}
          disabled={page === "..."}
        >
          <span className="text-lb-md flex py-0.5">{page}</span>
        </button>
      ))}

      {/* Tombol Panah Kanan */}
      <button
        title="pagination"
        type="button"
        onClick={handleNextClick}
        className={`flex px-2 py-0.5 flex-col justify-center items-center self-stretch rounded ${lastClicked === "next" ? "bg-blackLayer-1 text-secondary" : "bg-secondary text-primary"} hover:bg-blackLayer-1 hover:border-2 hover:border-blackLayer-4 active:bg-whiteLayer-3 active:text-secondary active:border-2 transition-transform duration-300 ease-in-out`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        >
          <path d="M13 17L18 12L13 7" />
          <path d="M7 17L12 12L7 7" />
        </svg>
      </button>
    </div>
  );
};

export default Pagination;
