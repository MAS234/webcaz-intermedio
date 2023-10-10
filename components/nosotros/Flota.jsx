import React from "react";
import Image from "next/image";
import flota1 from "../../public/assets/Flota (1).png";
import flota2 from "../../public/assets/Flota (2).png";
import flota3 from "../../public/assets/Flota (3).png";
import flota4 from "../../public/assets/Flota (4).png";

function Flota() {
  return (
    <section className="w-full lg:h-[100vh]  h-auto lg:mt-0 mt-10">
      <h1 className="text-4xl font-bold bg-[#003459] text-white p-2 pl-3 w-[8em] borderFlota">
        NUESTRA FLOTA
      </h1>

      <div className="flex justify-center items-center">
      <div className="w-full h-[80vh]  fondoFlota "></div>
      <div className="fondoBlurFlota w-full h-[80vh]  absolute flex flex-col lg:flex-row overflow-auto lg:gap-0 gap-20" >
        <div className="w-96 m-auto " data-aos="fade-up" >
        <Image src={flota1} alt="flota1" className="reflejo" width={300} height={300}/>
        <p className="text-center text-white font-semibold text-2xl">LV-JQK 500</p>
        </div>
        <div className="w-96 m-auto" data-aos="fade-up">
        <Image src={flota2} alt="float2" className="reflejo" width={300} height={300}/>
        <p className="text-center text-white font-semibold text-2xl">LV-JQK 500</p>
        </div>
        <div className="w-96 m-auto" data-aos="fade-up">
        <Image src={flota3} alt="float3" className="reflejo" width={300} height={300}/>
        <p className="text-center text-white font-semibold text-2xl">LV-JQK 500</p>
        </div>
        <div className="w-96 m-auto" data-aos="fade-up">
        <Image src={flota4} alt="float4" className="reflejo" width={300} height={200}/>
        <p className="text-center text-white font-semibold text-2xl">LV-JQK 500</p>
        </div>
      </div>
      </div>


    </section>
  );
}

export default Flota;
