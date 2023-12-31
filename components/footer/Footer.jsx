import React from "react";
import { IoAirplaneOutline } from "react-icons/io5";


function Footer() {
  return (
    <>
      <article className="w-full h-72 fondoMail flex justify-center items-center mt-16" data-aos="fade-up">
        <div className="lg:w-[70%] w-auto lg:h-40 h-auto bg-[#003459] rounded-lg shadow-lg shadow-black flex flex-wrap justify-evenly items-center p-5 ">
          {/* frase  */}
          <div>
            <p className="lg:w-96 w-auto lg:text-xl text-sm text-center text-white">
              ¿Queres más Información de nuestros cursos? <br/> ¡Déjanos tu email! <br/>
              <span className="font-semibold">Próxima Temporada Febrero 2024</span>
            </p>
          </div>
          {/* input/mail  */}
          <div className="flex justify-between items-center gap-5 mt-2">
            <input type="text" className="lg:w-72 w-48 rounded-full lg:h-10 h-5 lg:p-5 p-4 shadow-md shadow-black" placeholder="example@gmail.com"/>
            <IoAirplaneOutline className="text-4xl text-white"/>
          </div>
        </div>
      </article>

      <footer className=" fondoFooter w-full h-52 mt-10">
        <div className="flex justify-between items-center lg:p-5 p-2 lg:pt-32 pt-40 text-white text-lg ">
          <p className="">AeroWebs</p>
          <p>Buenos Aires, Argentina</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
