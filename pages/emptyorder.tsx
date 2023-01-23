import React, { useState, useEffect } from "react";
import ReCAPTCHA from "react-google-recaptcha";
// import { getImgMarca } from "../src/components/functions";
import Router from "next/router";
import { Input } from "antd";
import Hotjarcomponent from "../src/components/Hotjar";
import Animation from "../src/components/Animations/camion";


const sitekey = process?.env?.NEXT_PUBLIC_GOOGLE_RECAPTCHA || ""

const Index = () => {
  const [idCompra, setIdcompra] = useState("");
  const [errorIdCompra, setErrorIdCompra] = useState(
    "Lo sentimos pero la orden todavía está siendo procesada, pronto podrás ver más detalles.",
  );
  const [errorCaptcha, setErrorCaptcha] = useState(null);
  const [captcha, setCaptcha] = useState(true);
  const [disableButton, setDisableButton] = useState(true);
  const [loading, setLoading] = useState(false);
  // const [orderContent, setOrderContent] = useState({
  //   fecha: "",
  //   marca: "",
  //   orden: "",
  //   sgs: [],
  // });

  useEffect(() => {
    if (!idCompra.trim() || captcha === true) {
      setDisableButton(true);
    } else {
      setDisableButton(false);
    }
    if (loading) {
      setDisableButton(true);
    }
  }, [idCompra, captcha, loading]);

  function onChange(value) {
    setErrorCaptcha(null);
    setDisableButton(false);

    if (value === null) {
      setDisableButton(true);
      setCaptcha(true);
    } else {
      setDisableButton(false);
      setCaptcha(false);
    }
    if (!value.trim()) {
      setErrorCaptcha("haga click en el check para continuar");

      return;
    }
  }

  const saveCompra = (e) => {
    setErrorIdCompra(null);
    setDisableButton(false);

    e.preventDefault();
    if (!idCompra.trim()) {
      setErrorIdCompra("Escriba un código por favor...");
      setDisableButton(true);
      return;
    }
    if (captcha === true) {
      setDisableButton(true);
      return;
    }

    setLoading(true);
    setDisableButton(true);
    setErrorIdCompra(null);
    Router.push(`/compra/${idCompra}`);
  };


  return (
    <div className="w-full h-screen flex flex-col">
      {/*  HEADER */}
      <Hotjarcomponent />
      <div
        className="w-full h-auto bg-white flex justify-between px-10"
        style={{ maxHeight: "50px" }}
      >
        <div className="w-1/5 sm:w-2/5 lg:w-3/4"></div>
      </div>

      {/* DATOS */}
      <div className="w-full h-full flex">
        <div className="w-full md:w-1/2 h-full flex flex-col justify-around items-center p-6 md:p-12 bg-white">
          <h1
            className="text-xl md:text-3xl font-bold text-center"
            style={{ color: "#007BFF" }}
          >
            {" "}
            Sigue tu compra<br></br>cuando quieras
          </h1>
          {/*  <img
            src="/svg/camion.svg"
            className="w-full h-auto"
            style={{ maxWidth: "300px" }}
          /> */}
          <Animation />
          <form className="w-full lg:w-1/2 h-auto" onSubmit={saveCompra}>
            <h3
              className="mb-1"
              style={{ color: "#d9d9d9" }}
            >
              Ingresa tu número de orden
            </h3>
            <Input
              type="text"
              placeholder="EJ: XXX123456-01"
              className="w-full h-auto py-4 rounded-full px-2 border-2 mb-4 mt-4 md:mt-0"
              style={{ borderColor: "#007BFF" }}
              value={idCompra}
              onChange={(e) => {
                setIdcompra(e.target.value);
              }}
            ></Input>
            {errorIdCompra ? (
              <span className="text-red-danger mb-2" style={{ color: "red" }}>
                {errorIdCompra}
              </span>
            ) : null}

            <ReCAPTCHA
              sitekey={sitekey}
              data-callback="onSubmit"
              data-expired-callback="onExpired"
              onChange={onChange}
              className="flex justify-center  g-recaptcha "
            />
            {errorCaptcha ? (
              <p className="text-red-danger" style={{ color: "red" }}>
                {errorCaptcha}
              </p>
            ) : null}
            <button
              type="submit"
              className={`w-full h-auto py-4 text-lg font-bold text-white rounded-lg mt-4 ${
                disableButton ? "disabled" : ""
              }`}
              style={{ backgroundColor: "#007BFF" }}
              disabled={disableButton}
            >
              {loading ? " CARGANDO..." : "RASTREAR ENVÍO"}
            </button>
          </form>
        </div>

        <div
          className="w-1/2 h-full hidden md:flex flex-col justify-between items-center "
          style={{ backgroundColor: "#E2F0FF" }}
        >
          <img
            src="/svg/illustration-siguetucompra.svg"
            className="w-full h-screen"
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
