import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../context/Auth";

import { useNavigate } from "react-router-dom";
import Pagination from "../components/Atom/Selector/pagination";
import Navbar from "../components/organisms/Navbar";
import { Table } from "../components/Molekul/table";
import ButtonVariant from "../components/Atom/Button/Button";
import { ArrowRight } from "../components/Atom/icons/arrow";

const headers = ["Nama", "NIM", "Kelas", "Tahun", "Status Verifikasi"];
const rowsUser = [
  ["Rahmat Mirza", "230209501089", "PTIK E", "2023", "Terverifikasi"],
  ["Agil Santoso", "230209501105", "PTIK E", "2023", "Terverifikasi"],
  ["Ika Amaliah", "230210500046", "Tekom E", "2023", "Belum Terverifikasi"],
  ["Bayu Wijaya", "230209501213", "PTIK F", "2023", "Terverifikasi"],
  ["Dewi Sartika", "230209501314", "PTIK B", "2023", "Belum Terverifikasi"],
  ["Nina Halim", "230210500055", "PTIK E", "2022", "Terverifikasi"],
  ["Ahmad Fauzan", "230209501077", "Tekom F", "2022", "Belum Terverifikasi"],
  ["Rini Suryani", "230209501002", "PTIK A", "2021", "Terverifikasi"],
  ["Miko Prasetyo", "230209501098", "Tekom B", "2023", "Terverifikasi"],
  ["Rika Anindya", "230209501345", "PTIK D", "2023", "Belum Terverifikasi"],
];

const HomePageAdmin = () =>
{
  const navigate = useNavigate();

  const { authData } = useContext(AuthContext);
  // const [adminData, setAdminData] = useState(null);

  useEffect(() =>
  {
    // Contoh penggunaan id untuk memuat data admin
    if (authData.id)
    {
      console.log("Memuat data admin dengan ID:", authData.id);
    }
  }, [authData.id]);

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 20;

  const handlePageChange = (page) =>
  {
    setCurrentPage(page);
    console.log("Current page:", page);
  };
  return (
    <div className="table-container flex min-w-[1024px] px-20 flex-col justify-center items-end gap-2 flex-grow self-stretch">
      <Navbar />
      <ButtonVariant
        text="Create Account"
        shape="Circle"
        size="large"
        primary={false}
        withIconRight={<ArrowRight color="#FFF0D1" />}
        onClick={() => navigate("/create-user-account")}
      />
      <Table headers={headers} rows={rowsUser} />
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default HomePageAdmin;
