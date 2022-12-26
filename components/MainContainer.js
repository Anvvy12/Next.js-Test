import React from "react";
import Head from "next/head";
import A from "./A";

const MainContainer = ({ children, keywords }) => {
  return (
    <>
      <Head>
        <meta keywords={"Bogdan Roman Next.js" + keywords}></meta>
        <title>Testing Next.js</title>
      </Head>
      <div className="navbar">
        <A href={"/"} text="Main"></A>
        <A href={"/users"} text="Users"></A>
      </div>
      <div>{children}</div>{" "}
      <style jsx>{`
        .navbar {
          background-color: orange;
          padding: 15px;
        }
      `}</style>
    </>
  );
};

export default MainContainer;
