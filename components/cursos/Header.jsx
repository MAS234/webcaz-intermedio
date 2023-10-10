import { informacionCardsCursos } from "@/data/data";
import { BsWhatsapp } from "react-icons/bs";
import React from "react";


function Header() {
  return (
    <header className="w-full lg:h-[170vh] h-auto">
      <div className="w-full h-[30vh] fondoPortadaCursos bg-black"></div>
      <div className="w-full h-[30vh] top-0 absolute fondoBlurCursos"></div>

      <section className="w-full lg:h-[140vh] h-auto p-5">
        <h1 className="text-left text-5xl text-[#003459] m-5 font-bold uppercase" data-aos="fade-up">
          Cursos
        </h1>

        <h3 className="text-left text-3xl lg:w-[20em] w-auto text-[#003459] m-5 mt-10 font-bold uppercase" data-aos="fade-up">
          Explora el Cielo con Nuestros Cursos de Aviación
        </h3>

        <p className="m-5 text-xl w-auto" data-aos="fade-up">
          ¡Bienvenido al emocionante mundo de la aviación! En nuestra escuela
          AeroFly, te ofrecemos una amplia gama de cursos diseñados para hacer
          realidad tus sueños de volar. Ya sea que estés buscando convertirte en
          un piloto profesional, explorar la ingeniería aeronáutica o
          simplemente sumergirte en el apasionante campo de la aviación, tenemos
          el programa perfecto para ti.
        </p>

        <div className="flex flex-wrap lg:flex-row gap-10 mt-10 items-center justify-center" data-aos="fade-up">
            {informacionCardsCursos.map((curso) => (
                <div key={curso.id} className="w-72 h-64 rounded-lg bg-transparent hover:bg-[#003459] duration-200  border-solid border-[#003459] border-4 flex flex-col justify-center items-center gap-10 text-[#003459] hover:text-white">
                    <p className="text-5xl ">{curso.icon}</p>
                    <p className="text-xl font-semibold text-center">{curso.titulo}</p>

                    <button className="bg-[#003459] hover:bg-white rounded-lg p-1 text-white hover:text-[#003459] font-semibold w-28">Leer mas</button>

                </div>
            ))}
        </div>

        <button className="text-[#003459] hover:text-white  bg-white hover:bg-[#003459]  border-2 border-solid border-[#003459] font-semibold p-2 w-48 rounded-3xl flex items-center justify-evenly m-auto mt-10 text-xl duration-200">
            Inscribete
            <BsWhatsapp/>
            </button>
      </section>
    </header>
  );
}

export default Header;
