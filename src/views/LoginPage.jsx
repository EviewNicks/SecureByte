import React from "react";
import { LoginForm } from "../components/Layouts/Form";
import Shape2 from "../components/Atom/icons/shape/shape2";
import { ShapeLine } from "../components/Atom/Accesories";

const LoginPage = ({
  title = "Platform Cerdas Untuk Memahami Materi", // Flexibilitas untuk title
  description = "Dapatkan Rangkuman Materi, Tutorial Interaktif, dan Tips Keterampilan untuk Sukses di Dunia Kerja", // Flexibilitas untuk deskripsi
}) => {
  return (
    <div className="main flex flex-col items-center gap-2.5 flex-grow self-stretch">
      <section className="login flex p-20 justify-center items-center flex-col gap-9 flex-grow self-stretch">
        <ShapeLine size="large" color="#092C4C" />
        {/* Login Form */}
        <article className="content-container flex py-2.5 px-22 flex-col-reverse items-center gap-2.5 self-stretch max-w-screen-lg w-full mx-auto">
          <div className="card-shape flex p-1 flex-col items-start gap-2.5 flex-grow self-stretch rounded-[28px] bg-bluesky">
            <div className="card flex  justify-between items-center flex-grow self-stretch rounded-3xl bg-whiteLayer-2">
              <LoginForm />

              {/* Sub Form */}
              <div className="flex justify-center w-1/2 items-center gap-2.5 flex-grow self-stretch rounded-2xl">
                <div className="flex p-8 flex-col justify-between items-start flex-grow self-stretch">
                  {/* Text Container */}
                  <div className="flex px-4 py-6 flex-col justify-between items-start flex-grow self-stretch">
                    <div className="flex items-center gap-2.5 self-stretch text-secondary">
                      <h1 className="text-h-lg">{title}</h1>{" "}
                      {/* Title dengan properti */}
                    </div>
                    <div className="flex items-center gap-2.5 self-stretch">
                      <p className="text-p-md">“ {description} “</p>{" "}
                      {/* Deskripsi dengan properti */}
                    </div>
                  </div>

                  {/* Shape Container */}
                  <div className="flex items-center flex-grow self-stretch">
                    <div className="flex w-60 p-4 justify-center items-center self-stretch rounded-3xl bg-glass">
                      <div className="flex w-52 h-52 justify-center items-center shrink-0">
                        <Shape2 size={200} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
};

export default LoginPage;
