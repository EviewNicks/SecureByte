import React from "react";
import HeadlineBoxLine from "./headlineBoxLine";

const ExampleHeadlineBoxLine = () => {
  return (
    <div className="profile-card-contaier flex p-8 justify-center items-center content-center gap-4 flex-wrap w-full">
      {/* Default HeadlineBoxLine */}
      <HeadlineBoxLine />

      {/* HeadlineBoxLine dengan teks dan warna latar belakang khusus */}
      <HeadlineBoxLine
        text="Pelatihan dan Pengembangan"
        textColor="text-white"
        bgColor="bg-bluesky"
      />
    </div>
  );
};

export default ExampleHeadlineBoxLine;
