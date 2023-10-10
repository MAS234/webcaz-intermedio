import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "./../../public/assets/logoAviones.png";
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
        <Link href={"/"} className={`navLogo ${Open && "open"}`}>
          <Image src={logo} width={100} height={100} alt="logo" />
          <p className="text-white">AEROCLUB SKYWINGS</p>
        </Link>

        <div
          className={`items ${
            Open && "open"
          } justify-start text-center items-center flex`}
        >
          <Link href={"/"}>Inicio</Link>
          <Link href={"/nosotros"}>Nosotros</Link>
          <Link href={"/cursos"}>Cursos</Link>
          <Link href={"#"}>Blog</Link>
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

      {/* WHATSAPP  */}
      <div className=" fixed bottom-14 z-50 right-10 ">
        <Image
          src={"/assets/whatsapp.png"}
          alt="whatsapp"
          width={70}
          height={70}
          className=" rounded-full bg-[#003459c6] hover:bg-[#003459] p-2  cursor-pointer duration-200"
        />
      </div>
    </div>
  );
}

export default NavBar;
