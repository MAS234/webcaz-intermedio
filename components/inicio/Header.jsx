import React from 'react'
import { BsFacebook, BsWhatsapp, BsInstagram } from "react-icons/bs";
import { AiFillMail } from "react-icons/ai";
import Image from "next/image";

function Header() {
  return (
    <>
            <header className="fondoPrincipal relative w-full h-[100vh]">
        {/* PHRASE  */}
        <div className="flex justify-start items-center "  data-aos="fade-right" >
          <h1 className="text-white md:text-4xl text-2xl ml-10 mt-40 w-[35%] font-medium uppercase">
            “El cielo no es el límite es solo el comienzo de tu viaje como
            piloto.”
          </h1>
        </div>

        {/* BUTTON  */}
        <button data-aos="zoom-in" className="bg-[#003459] hover:bg-[#1d6293] duration-200 p-2 rounded-3xl ml-5 md:ml-24 font-medium mt-10 w-40 text-white">
          VER CURSOS
        </button>

        {/* social networks  */}
        <div className="ml-10 gap-5 flex flex-col top-0 right-0 mt-[10vh]  md:mt-40" data-aos="fade-right">
          <BsFacebook className="w-5 h-5 md:w-8 md:h-8 cursor-pointer text-white hover:text-[#1d6293] duration-200" />
          <BsInstagram className="w-5 h-5 md:w-8 md:h-8 cursor-pointer text-white hover:text-[#1d6293] duration-200" />
          <AiFillMail className="w-5 h-5 md:w-8 md:h-8 cursor-pointer text-white hover:text-[#1d6293] duration-200" />
        </div>

        {/* WHATSAPP  */}
        <div className=" fixed bottom-14 right-10 ">
            <Image src={"/assets/whatsapp.png"} alt="whatsapp" width={70} height={70} className=" rounded-full bg-[#003459c6] hover:bg-[#003459] p-2  cursor-pointer duration-200"/>
        </div>
      </header>
    </>
  )
}

export default Header
      