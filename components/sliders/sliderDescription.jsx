import { Carousel } from "@material-tailwind/react";
import Image from "next/image";

function SliderDescription() {
  return (

<Carousel className="rounded-xl">
      <img
        src="/assets/AvionesMuestra.jpg"
        alt="Aviones"
        className="h-full w-full object-cover"
      />
      <img
        src="/assets/AvionesMuestra2.jpg"
        alt="Aviones"
        className="h-full w-full object-cover"
      />
            <img
        src="/assets/AvionesMuestra3.jpg"
        alt="Aviones"
        className="h-full w-full object-cover"
      />
    </Carousel>
  )
}

export default SliderDescription
