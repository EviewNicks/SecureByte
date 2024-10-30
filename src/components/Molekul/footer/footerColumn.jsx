import React from "react";
import { LineVertical } from "../../Atom/icons/shape";

const FooterColumn = ({ children }) => (
  <section className="flex justify-between items-center flex-grow h-[278px]">
    <div className="column-content flex flex-col justify-center items-center gap-6 px-4 flex-grow self-stretch text-secondary text-lb-md font-bold">
      {children}
    </div>
    <LineVertical />
  </section>
);

export default FooterColumn;
