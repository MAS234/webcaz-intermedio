import React from "react";
import NavBar from "./navBar/NavBar";
import Footer from "./footer/Footer";

function Layout({ children }) {
  return (
    <>
      <header>
        <NavBar />
      </header>
      {children}
      <footer>
      <Footer />
      </footer>
    </>
  );
}

export default Layout;
