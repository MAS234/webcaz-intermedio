import React from 'react'
import { BsFacebook, BsWhatsapp, BsInstagram } from "react-icons/bs";
import { AiFillMail } from "react-icons/ai";
import Link from 'next/link';

function Header() {
  return (
    <>
        <header className="fondoPrincipal relative w-[100%]  h-[100vh]">
        {/* PHRASE  */}
        <div className="flex justify-start items-center "  data-aos="fade-right" >
          <h1 className="text-white md:text-4xl text-2xl ml-10 mt-40 lg:w-[35%] w-[80%] font-medium uppercase">
            “El cielo no es el límite es solo el comienzo de tu viaje como
            piloto.”
          </h1>
        </div>

        {/* BUTTON  */}
        <div data-aos="zoom-in" className="bg-[#003459] hover:bg-[#1d6293] duration-200 p-2 rounded-3xl ml-5 md:ml-24 font-medium lg:mt-10 mt-52 w-40 text-white text-center cursor-pointer">
        <Link href="/cursos">
          VER CURSOS
        </Link>
        </div>

        {/* social networks  */}
        <div className="ml-10 gap-5 flex flex-col top-0 right-0 mt-[7vh]  lg:mt-40 " data-aos="fade-right">
          <BsFacebook className="w-5 h-5 md:w-8 md:h-8 cursor-pointer text-white hover:text-[#1d6293] duration-200" />
          <BsInstagram className="w-5 h-5 md:w-8 md:h-8 cursor-pointer text-white hover:text-[#1d6293] duration-200" />
          <AiFillMail className="w-5 h-5 md:w-8 md:h-8 cursor-pointer text-white hover:text-[#1d6293] duration-200" />
        </div>
      </header>
    </>
  )
}

export default Header
      