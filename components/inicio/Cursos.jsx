import { informacionCursos } from "@/data/data";
import SliderCursos from "../sliders/SliderCursos";

function Cursos() {
  return (
    <section className="max-w-full m-auto h-[100vh] bg-red-400">
      <div className="w-full h-[30vh] fondoNubes p-20">
        <h1
          data-aos="fade-right"
          className="font-bold lg:text-left text-center lg:text-7xl md:text-9xl text-6xl lg:mt-[-3%]  text-[#003459]"
        >
          CURSOS
        </h1>
      </div>


      <div className="w-full h-[70vh]  bg-[#003459]  border-[#003459] p-5">

      <SliderCursos />

      </div>
    </section>
  );
}

export default Cursos;
