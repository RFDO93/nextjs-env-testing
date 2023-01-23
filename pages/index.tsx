import React from "react";

import { NextPage } from 'next'

const sitekey = process?.env?.NEXT_PUBLIC_GOOGLE_RECAPTCHA || ""
const host = process.env.NEXT_PUBLIC_API;
const xBffKey = process.env.NEXT_PUBLIC_X_BFF_API;
const apiKeyAm = process.env.NEXT_PUBLIC_API_KEY_AM;
const tk = process.env.NEXT_PUBLIC_TK;

const Index: NextPage = () => {

  return (
    <div className="w-full h-screen flex flex-col">

      <h1>Prueba Numero 1</h1>

      <pre>
        {JSON.stringify({
          sitekey,
        })}
      </pre>

      <pre>
        {JSON.stringify({
          host,
        })}
      </pre>

      <pre>
        {JSON.stringify({
          xBffKey,
        })}
      </pre>

      <pre>
        {JSON.stringify({
          apiKeyAm,
        })}
      </pre>

      <pre>
        {JSON.stringify({
          tk,
        })}
      </pre>
    </div>
  );
};


export default Index;
