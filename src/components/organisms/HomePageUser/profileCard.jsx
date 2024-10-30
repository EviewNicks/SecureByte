import React from "react";
import ProfileCard from "../../Molekul/HomePageUser/profileCard";

const ExampleProfileCard = () => {
  // Sementara kita gunakan array statis sebagai data profil
  const profiles = [
    {
      imageUrl: "",
      name: "Ardiansyah",
      className: "Tekom E",
      linkedInUrl: "https://linkedin.com/in/ardiansyah",
    },
    {
      imageUrl: "",
      name: "Nadia Rahman",
      className: "Sistem Informasi G",
      linkedInUrl: "https://linkedin.com/in/nadiarahman",
    },
    {
      imageUrl: "",
      name: "Putri Maulida",
      className: "Manajemen C",
      linkedInUrl: "https://linkedin.com/in/putrimaulida",
    },
    {
      imageUrl: "",
      name: "Faisal Akbar",
      className: "Teknik Mesin A",
      linkedInUrl: "https://linkedin.com/in/faisalakbar",
    },
    {
      imageUrl: "",
      name: "Rina Oktaviani",
      className: "Desain Interior B",
      linkedInUrl: "https://linkedin.com/in/rinaoktaviani",
    },
    {
      imageUrl: "",
      name: "Eko Susanto",
      className: "Teknik Sipil D",
      linkedInUrl: "https://linkedin.com/in/ekosusanto",
    },
    {
      imageUrl: "/assets/img/profile7.jpg",
      name: "Dina Amalia",
      className: "Psikologi F",
      linkedInUrl: "https://linkedin.com/in/dinaamalia",
    },
    {
      imageUrl: "/assets/img/profile8.jpg",
      name: "Satria Wijaya",
      className: "Teknik Industri B",
      linkedInUrl: "https://linkedin.com/in/satriawijaya",
    },
    {
      imageUrl: "/assets/img/profile9.jpg",
      name: "Ratna Wulandari",
      className: "Ilmu Komunikasi A",
      linkedInUrl: "https://linkedin.com/in/ratnawulandari",
    },
    {
      imageUrl: "/assets/img/profile10.jpg",
      name: "Yusuf Pratama",
      className: "Ekonomi Pembangunan E",
      linkedInUrl: "https://linkedin.com/in/yusufpratama",
    },
  ];

  return (
    <section className="profile-card-contaier flex p-8 justify-center items-center content-center gap-4 flex-wrap w-full">
      {profiles.map((profile, index) => (
        <ProfileCard
          key={index}
          imageUrl={profile.imageUrl}
          name={profile.name}
          className={profile.className}
          linkedInUrl={profile.linkedInUrl}
        />
      ))}
    </section>
  );
};

export default ExampleProfileCard;
