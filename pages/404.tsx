import React from "react";
import Link from "next/link"

import Animation from "../src/components/Animations/error";
const Error = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-between">
      <div className="w-full lg:w-1/2 h-full flex flex-col justify-between text-center relative items-center bg-error mt-24 self-center">
        <div className="z-10 w-full h-full flex flex-col justify-between ">
          <h1 className="text-2xl my-8">Uppss!, esta pagina no existe</h1>

          <Animation />
        </div>
      </div>
      <div>
        <Link href="/" className="text-2xl mt-12 flex justify-center w-full h-auto text-error">
          <a>
            volver al Inicio
          </a>
        </Link>
      </div>
      <div className="w-full h-full flex  justify-center items-center footer-heigth bg-white ">
        <p>© 2021 Forus. All rights reserved</p>
      </div>
    </div>
  );
};

export default Error;
