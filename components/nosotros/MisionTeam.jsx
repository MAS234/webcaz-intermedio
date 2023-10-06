import React from "react";
import SliderNosotros from "../sliders/SliderNosotros";

function MisionTeam() {
  return (
    <section className="w-full lg:h-[100vh] h-auto p-5 ">
      <div data-aos="fade-up">
        <h2 className="text-left text-5xl font-bold uppercase ">Nuestra misión</h2>

        <p className="text-left lg:w-[90%] w-auto text-lg  mt-5">
        Norem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit. Maecenas eget condimentum velit. Maecenas eget condimentum velit. Maecenas eget condimentum velit.
        </p>
      </div>

      <div >
      <h2 className="text-left text-5xl font-bold mt-10 uppercase" data-aos="fade-up">Nuestro team</h2>

      <SliderNosotros/>
      
      </div>
    </section>
  );
}

export default MisionTeam;
