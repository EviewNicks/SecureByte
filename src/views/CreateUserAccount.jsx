import React, { useState } from "react";
import Breadcrumb from "../components/Atom/Selector/BreadCrumb";
import { FormCreateUserAccout } from "../components/Layouts/Form";

const CreateUserAccount = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const breadcrumbItems = [
    { label: "Data Mahasiswa", href: "./data-mahasiswa" },
    { label: "Password", href: "/password" },
    { label: "Validation", href: "/Validation" },
  ];

  // Mendefinisikan formData sebagai state
  const [formData, setFormData] = useState({
    username: "",
    nim: "",
    prodi: "",
    kelas: "",
    tahun: "",
    password: "",
    confirmPassword: "",
  });

  const isFormAccountFilled = () =>
    formData.username &&
    formData.nim &&
    formData.prodi &&
    formData.kelas &&
    formData.tahun;

  const isFormPasswordFilled = () =>
    formData.password &&
    formData.confirmPassword &&
    formData.password === formData.confirmPassword;

  // Fungsi untuk memperbarui formData
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className="flex justify-center items-center w-full min-h-screen">
      <div className="create-user-account-box flex w-full h-auto mx-20 flex-col justify-center items-center rounded-3xl">
        <div className="container-card min-h-[563px] min-w-[916px] flex justify-between items-start self-stretch rounded-[24px] bg-gold">
          <div className="box-card flex flex-col items-start flex-grow self-stretch">
            <Breadcrumb
              items={breadcrumbItems}
              activeIndex={activeIndex}
              handleBreadcrumbClick={(index) => setActiveIndex(index)}
              isFormAccountFilled={isFormAccountFilled}
              isFormPasswordFilled={isFormPasswordFilled}
            />
            <div className="container-box-card flex px-10 py-10 justify-center items-center flex-grow self-stretch">
              <div className="card flex min-w-[250px] p-2.5 flex-col items-start flex-grow self-stretch rounded-3xl bg-moon">
                {/* FormCreateUserAccount */}
              </div>
            </div>
          </div>

          <FormCreateUserAccout
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            formData={formData} // Mengoper formData sebagai prop jika diperlukan
            setFormData={setFormData} // Mengoper setFormData sebagai prop jika diperlukan
          />
        </div>
      </div>
    </div>
  );
};

export default CreateUserAccount;
