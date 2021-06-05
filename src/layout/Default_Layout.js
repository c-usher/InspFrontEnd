import React from "react";
import { Footer } from "./partials/Footer_Comp";
import { Header } from "./partials/Header_Comp";

export const DefaultLayout = ({children}) => {
  return (
    <div className="default-layout">
      <header className="header mb-2 ">
        <Header />
      </header>
          <main className="main">{children}</main>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
};
