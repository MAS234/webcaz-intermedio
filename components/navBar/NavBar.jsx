import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "./../../public/assets/logoAviones.png"
import Link from "next/link";

function NavBar() {

    const [Open, setOpen] = useState(false);

    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

  return (
    <div>
      <nav className={`navBar ${Open && "open"} ${scrolling && "scrolled"}`}>
        <div className={`navLogo ${Open && "open"}`}>
          <Image src={logo} width={100} height={100} alt="logo"/>
          <p className="text-white">AEROCLUB  SKYWINGS</p>
        </div>

        <div
          className={`items ${
            Open && "open"
          } justify-start text-center items-center flex`}
        >
          
            <Link href={"#"}>Inicio</Link>
            <Link href={"#"}>Nosotros</Link>
            <Link href={"#"}>Cursos</Link>
            <Link href={"#"}>¡A Volar!</Link>
          
        </div>

        <div
          className={`toggle ${Open && "open"}`}
          onClick={() => setOpen(!Open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
