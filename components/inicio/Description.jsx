import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import SliderDescription from "../sliders/sliderDescription";

function Description() {
  return (
    <>
      <section className="flex flex-col md:flex-row p-5 md:p-16 md:pt-32 pt-16  justify-evenly items-center max-w-7xl m-auto  h-auto md:h-[100vh]">

        {/* CARRUSEL  */}
        <div data-aos="fade-right" className=" md:w-1/2 w-full h-[300px] md:h-full rounded-lg">
          <SliderDescription />
        </div>

        {/* DESCRIPTION  */}
        <div data-aos="fade-left" className=" md:w-1/2 w-full md:m-10 m-5 mt-10">
          <h1 className="text-center md:text-left md:text-5xl text-3xl uppercase font-bold text-[#003459] ">
            Convertimos sueños en realidades
          </h1>

          <p className="font-semibold md:text-2xl text-xl mt-5 text-center md:text-left">
            En{" "}
            <span className="text-white text-xl bg-[#003459]">
              AEROCLUB SKYWINGS
            </span>{" "}
            , creemos en elevar tus ambiciones y abrir las puertas al vasto
            mundo de la aviación. Desde el momento en que te unes a nuestra
            comunidad, te embarcas en un viaje emocionante hacia los cielos,
            donde el cielo ya no será el límite.
          </p>

          <div className="flex md:justify-between justify-center">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between  items-start mt-10 gap-3">
            <ul className="text-[#003459] flex flex-col gap-3  font-semibold text-2xl">
              <li className="flex items-center m-2">
                <AiFillCheckCircle className="md:w-7 md:h-7 w-10 h-10" />
                Vuelo Bautismo
              </li>
              <li className="flex items-center m-2">
                <AiFillCheckCircle className="md:w-7 md:h-7 w-10 h-10" />
                Instalaciones Completas
              </li>
              <li className="flex items-center m-2">
                <AiFillCheckCircle className="md:w-7 md:h-7 w-10 h-10" />
                Vuelo Bautismo
              </li>
            </ul>

            <ul className="text-[#003459] font-semibold flex flex-col gap-3 text-2xl ">
              <li className="flex items-center m-2">
                <AiFillCheckCircle className="md:w-7 md:h-7 w-10 h-10" />
                Vuelo Bautismo
              </li>
              <li className="flex items-center m-2">
                <AiFillCheckCircle className="md:w-7 md:h-7 w-10 h-10" />
                Vuelo Bautismo
              </li>
              <li className="flex items-center m-2">
                <AiFillCheckCircle className="md:w-7 md:h-7 w-10 h-10" />
                Vuelo Bautismo
              </li>
            </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Description;
