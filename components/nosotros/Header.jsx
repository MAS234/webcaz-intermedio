import React from "react";
import Image from "next/image";
import mapa from "../../public/assets/mapaArgentina.png"

function Header() {
  return (
    <header className="w-full log:h-[100vh] h-auto">
      {/* PORTADA  */}
      <div className="w-full h-[30vh] fondoPortadaNosotros bg-black"></div>
      <div className="w-full h-[30vh] top-0 absolute fondoBlurNosotros"></div>

      <section className="w-full lg:h-[70vh] h-auto p-5  border border-white border-solid flex flex-col lg:flex-row  justify-between items-center">
        <div>
          <h1 className="text-left text-6xl font-bold " data-aos="fade-up">NOSOTROS</h1>

          <p className="text-left lg:w-[50em] w-auto text-lg  mt-5" data-aos="fade-up">
            Norem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus. Maecenas eget condimentum velit, sit amet
            feugiat lectus. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus
            enim egestas, ac scelerisque ante pulvinar.
            Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus. Maecenas eget condimentum velit, sit amet
            feugiat lectus. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus
            enim egestas, ac scelerisque ante pulvinar.
          </p>
        </div>

        <div className=" flex flex-col h-auto" data-aos="fade-up">
          <Image src={mapa} alt="mapa" width={300} height={800}/>

          <p className="text-right font-semibold">Buenos Aires, Argentina</p>
        </div>
      </section>
    </header>
  );
}

export default Header;
