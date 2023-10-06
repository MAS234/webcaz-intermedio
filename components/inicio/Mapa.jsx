import React from "react";
import { GiSmartphone } from "react-icons/gi";
import { BsFacebook, BsWhatsapp, BsInstagram } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { BiMap } from "react-icons/bi";

function Mapa() {
  return (
    <>
      <section className="w-full lg:h-[100vh] h-auto bg-[#003459]">
        <div data-aos="fade-up" className="flex justify-center  items-center m-auto flex-wrap p-5 pt-0 ">
          <div className="lg:w-72 w-full h-96 rounded-lg card relative md:mt-10 mt-0 lg:mr-[-100px] z-20">
            <h2 className="lg:text-left text-center ml-5 text-white font-semibold mt-5 text-4xl ">
              Contactanos
            </h2>

            <p className="text-white flex lg:justify-start justify-center items-center lg:ml-5 ml-0 text-xl mt-5">
              <GiSmartphone className="mr-2 text-2xl" />
              +54 9 11 25568955
            </p>

            <p className="text-white flex lg:justify-start justify-center items-center lg:ml-5 ml-0 text-lg  mt-5">
              <BsWhatsapp className="mr-2" />
              +54 9 1123565468
            </p>

            <p className="text-white flex lg:justify-start justify-center items-center lg:ml-5 ml-0 text-lg  mt-5">
              <BsFacebook className="mr-2" />
              Aeroclub SKYWINGS
            </p>

            <p className="text-white flex lg:justify-start justify-center items-center lg:ml-5 ml-0 text-lg  mt-5">
              <BsInstagram className="mr-2" />
              @aeroclub_Skywings
            </p>

            <p className="text-white flex lg:justify-start justify-center items-center lg:ml-5 ml-0  text-lg  mt-5">
              <IoMdMail className="mr-2" />
              infoaeroclub@gmail.com
            </p>

            <p className="text-white flex lg:justify-start justify-center items-center lg:ml-5 ml-0 text-lg  mt-5">
              <BiMap className="mr-2 text-xl" />
              Washington 2256, Buenos Aires
            </p>
          </div>

          <iframe
            data-aos="fade-up"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.016888186375!2d-58.38414532441757!3d-34.60373445749876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4aa9f0a6da5edb%3A0x11bead4e234e558b!2sObelisco!5e0!3m2!1ses!2sar!4v1696351633411!5m2!1ses!2sar"
            width="900"
            height="550"
            className="rounded-md shadow-lg shadow-gray-700 mt-10 "
          ></iframe>
        </div>
      </section>
    </>
  );
}

export default Mapa;
