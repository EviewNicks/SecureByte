import React from "react";
import HeadlineBox from "./HeadlineBox";
import ButtonVariant from "../Button/Button";

import ArrowUp from "../icons/arrow/arrowUp";
import ArrowDown from "../icons/arrow/arrowDowns";
import ArrowLeft from "../icons/arrow/arrowLeft";
import ArrowRight from "../icons/arrow/arrowRight";

const ExampleHeadlineBox = () => {
  return (
    <>
      {/* Default HeadlineBox */}
      <HeadlineBox />

      <section class="headline-box relative flex flex-col items-center self-stretch ">
        {/* HeadlineBox dengan teks, warna latar belakang, dan warna teks khusus */}
        <HeadlineBox
          title="DATA SCIENCE MODULE"
          subtitle="BY DataTech Academy"
          bgColor="bg-blue-500"
          textColor="text-white"
        />
        <div class="relative -top-8 flex p-2 flex-col items-start rounded-[50px] bg-dark-glass ">
          <ButtonVariant
            text="Modul Machine Learning"
            shape="Circle" // atau "Circle"
            size="small"
            primary={false}
            withIconLeft={false}
            withIconRight={<ArrowRight color="currentColor" />}
          />
        </div>
      </section>
    </>
  );
};

export default ExampleHeadlineBox;
