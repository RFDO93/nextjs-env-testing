import React from "react";
import Layout from "../src/components/Layout/index";
import Animation from "../src/components/Animations/error";

const Error = () => {
  return (
    <Layout>
      <div className="w-full h-full flex flex-col justify-between text-center relative items-center bg-error mt-4 self-end">
        <div className="z-10 w-full h-full flex flex-col justify-between ">
          <h1 className="text-2xl my-8">Uppss! Página no encontrada</h1>

          <Animation />
        </div>
      </div>
    </Layout>
  );
};

export default Error;
