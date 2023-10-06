import { informacionAviones } from "@/data/data"
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import Image from "next/image"

function Aviones() {
  return (
    <section className="max-w-7x m-auto lg:h-[100vh] h-auto border-solid border border-white " data-aos="fade-up">
      <h1 className="mt-10 lg:text-6xl text-4xl text-center font-bold text-[#003459]">¿Te Gustaría Volar en Nuestros Aviones?</h1>

      <div className="w-full h-auto mt-10 flex flex-col lg:flex-row justify-center items-center ">

        <div className="w-[90%] h-auto flex flex-col md:flex-row justify-evenly items-center gap-4 p-5 " >
          {informacionAviones.map((avion) => (
            <div key={avion.id} className=" bg-[#003459] hover:bg-[#132a3b] cursor-pointer w-64 h-80 rounded-lg shadow-lg shadow-gray-800 hover:shadow-gray-900 duration-200">
              <Image src={avion.image} alt={avion.nombre} width={220} height={200} className="m-auto mt-2 rounded-full"/>

              <p className="text-center font-semibold text-xl mt-2 text-white">{avion.modelo}</p>

              <p className="text-center text-xl mt-2 text-white">{avion.nombre}</p>
            </div>
          ))}
        </div>

        <div className="w-[10%] h-96 flex flex-col justify-center items-center ">
          <div>
          <BsFillArrowRightCircleFill className="m-auto w-16 h-16 text-[#003459] hover:text-[#132a3b] cursor-pointer duration-200"/>
          <p className="text-xl uppercase font-bold text-center text-[#003459]">Ver flota</p>
          </div>
        </div>

      </div>

    </section>
  )
}

export default Aviones
