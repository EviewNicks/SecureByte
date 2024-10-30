import React from "react";
import Breadcrumb from "./BreadCrumb";

const ExampleBreadCrumb = () => {
  const breadcrumbItems = [
    { label: "Data Mahasiswa", href: "./data-mahasiswa" },
    { label: "Password", href: "/password" },
    { label: "Verifikasi", href: "/verifikasi" },
  ];

  return (
    <div>
      <Breadcrumb items={breadcrumbItems} />
    </div>
  );
};

export default ExampleBreadCrumb;
