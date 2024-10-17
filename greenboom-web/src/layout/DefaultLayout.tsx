import Header from "../components/header/Header";
import React, { useState, ReactNode } from "react";
import Footer from "../components/footer/Footer";

const DefaultLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <div className="mx-auto max-w-screen-2xl  h-full">{children}</div>
      </main>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
