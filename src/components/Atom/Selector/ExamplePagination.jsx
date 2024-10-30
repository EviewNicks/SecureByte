import React, { useState } from "react";
import Pagination from "./pagination"; // pastikan path benar

function ExamplePagination(totalPages = "20") {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    console.log("Current page:", page);
  };

  return (
    <div className="flex flex-col justify-center items-center gap-10 m-20">
      {/* Pagination Component */}
      <Pagination
        totalPages={totalPages}
        onPageChange={(page) => console.log("Current page:", page)}
      />

      <p>Selected Page: {currentPage}</p>
    </div>
  );
}

export default ExamplePagination;
