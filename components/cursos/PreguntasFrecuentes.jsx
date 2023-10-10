import React from "react";
import {BsQuestionCircle, BsWhatsapp, BsInstagram, BsFacebook } from "react-icons/bs";
import Acordion from "../accordion/Accordion";


function PreguntasFrecuentes() {
  return (
    <section className="w-full lg:h-[100vh] h-auto">
      {/* FRASE  */}
      <div className="flex justify-center items-center">
        <div className="w-full fondoFraseCurso h-40 mt-3"></div>
        <div className="w-full h-40 absolute fondoBlurCursosFrase mt-3 flex justify-center items-center">
          <h1 className="sm:text-2xl lg:text-3xl text-lg  text-white font-semibold text-center" data-aos="fade-up">
            ¿Estás listo para despegar hacia una emocionante carrera en la
            aviación? ¡Únete a nosotros y descubre las infinitas posibilidades
            que ofrece el cielo!
          </h1>
        </div>
      </div>

      <h1 className="m-10 flex gap-3 items-center text-3xl font-semibold text-[#003459] uppercase" data-aos="fade-up">Preguntas Frecuentes
      <BsQuestionCircle/>
      </h1>

      {/* PREGUNTAS FRECUENTES  */}
      <div className="m-10 flex flex-wrap lg:flex-row justify-between items-center">
        <div className="w-[50em]" data-aos="fade-up">
        <Acordion/>
        </div>
        <div className="w-96 h-96 m-auto flex flex-col justify-center items-center" data-aos="fade-up">
            <h1 className="text-4xl text-center text-[#003459]">¡Escribinos en nuestras redes sociales y sacate todas tus dudas!</h1>
            <div className="text-4xl flex justify-center items-center gap-5 text-[#003459] mt-5">
                <BsWhatsapp className="hover:text-[#3da57c] cursor-pointer"/>
                <BsInstagram className="hover:text-[#6c35a2] cursor-pointer"/>
                <BsFacebook className="hover:text-[#3d5aa5] cursor-pointer"/>
            </div>
        </div>
      </div>
    </section>
  );
}

export default PreguntasFrecuentes;
