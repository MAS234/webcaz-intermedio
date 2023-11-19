import bautismo from "../public/assets/bautismo.png";
import privado from "../public/assets/privado.png";
import instructor from "../public/assets/instructor.png";
import avion1 from "../public/assets/AvionesMuestra.jpg";
import avion2 from "../public/assets/AvionesMuestra2.jpg";
import avion3 from "../public/assets/AvionesMuestra3.jpg";
import avion4 from "../public/assets/AvionesMuestra4.jpg";
import team from "../public/assets/team.png";

// ICONS
import { FaPlaneDeparture } from "react-icons/fa";
import { FaTowerObservation } from "react-icons/fa6";
import { GiCaptainHatProfile, GiAirplane } from "react-icons/gi";
import { BsFillAirplaneFill } from "react-icons/bs";
import { TbNorthStar } from "react-icons/tb";


const informacionAviones = [
  {
    id: 1,
    image: avion1,
    modelo: "LV-JQK 500",
    nombre: "Avion",
  },
  {
    id: 3,
    image: avion3,
    modelo: "LV-JQK 500",
    nombre: "Avion",
  },
  {
    id: 4,
    image: avion4,
    modelo: "LV-JQK 500",
    nombre: "Avion",
  },
];

const informacionCursos = [
  {
    id: 1,
    image: privado,
    icon: <FaPlaneDeparture />,
    informacion:
      "Este curso es perfecto para aquellos que buscan volar por diversión o como un primer paso hacia una carrera en la aviación. ",
    titulo: "Piloto de Avión Comercial",
    contenido: "Durante el curso de Piloto de Avión Comercial, adquirirás una comprensión profunda de la teoría de vuelo y ganarás experiencia práctica en el cockpit. Nuestro programa abarca temas esenciales como",
    temas: "Principios de Vuelo: Aprenderás los conceptos fundamentales de aerodinámica y cómo funcionan las aeronaves.\n\nReglamentación Aérea: Te familiarizarás con las regulaciones y procedimientos de seguridad que rigen la aviación.\n\nNavegación: Dominarás las técnicas de navegación aérea, incluyendo el uso de cartas de navegación y sistemas de navegación modernos.\n\nManejo de la Aeronave: Obtendrás habilidades prácticas de vuelo, incluyendo despegues, aterrizajes, maniobras y gestión de emergencias.\n\nMeteorología: Comprenderás cómo la meteorología afecta a la aviación y aprenderás a tomar decisiones informadas en relación al clima."

  },
  {
    id: 2,
    icon: <GiCaptainHatProfile />,
    image: bautismo,
    informacion:
      "Este curso es perfecto para aquellos que buscan volar por diversión o como un primer paso hacia una carrera en la aviación. ",
    titulo: "Instructor de vuelo",
    contenido: "Durante el curso de Instructor de vuelo, adquirirás una comprensión profunda de la teoría de vuelo y ganarás experiencia práctica en el cockpit. Nuestro programa abarca temas esenciales como",
    temas:"Principios de Vuelo: Aprenderás los conceptos fundamentales de aerodinámica y cómo funcionan las aeronaves.\n\nReglamentación Aérea: Te familiarizarás con las regulaciones y procedimientos de seguridad que rigen la aviación.\n\nNavegación: Dominarás las técnicas de navegación aérea, incluyendo el uso de cartas de navegación y sistemas de navegación modernos.\n\nManejo de la Aeronave: Obtendrás habilidades prácticas de vuelo, incluyendo despegues, aterrizajes, maniobras y gestión de emergencias.\n\nMeteorología: Comprenderás cómo la meteorología afecta a la aviación y aprenderás a tomar decisiones informadas en relación al clima."
  },
  {
    id: 3,
    image: instructor,
    icon: <BsFillAirplaneFill />,
    informacion:
      "Este curso es perfecto para aquellos que buscan volar por diversión o como un primer paso hacia una carrera en la aviación. ",
    titulo: "PILOTO PRIVADO",
    contenido: "Durante el curso de PILOTO PRIVADO, adquirirás una comprensión profunda de la teoría de vuelo y ganarás experiencia práctica en el cockpit. Nuestro programa abarca temas esenciales como",
    temas:"Principios de Vuelo: Aprenderás los conceptos fundamentales de aerodinámica y cómo funcionan las aeronaves.\n\nReglamentación Aérea: Te familiarizarás con las regulaciones y procedimientos de seguridad que rigen la aviación.\n\nNavegación: Dominarás las técnicas de navegación aérea, incluyendo el uso de cartas de navegación y sistemas de navegación modernos.\n\nManejo de la Aeronave: Obtendrás habilidades prácticas de vuelo, incluyendo despegues, aterrizajes, maniobras y gestión de emergencias.\n\nMeteorología: Comprenderás cómo la meteorología afecta a la aviación y aprenderás a tomar decisiones informadas en relación al clima."
  },
  {
    id: 4,
    image: privado,
    icon: <TbNorthStar />,
    informacion:
      "Este curso es perfecto para aquellos que buscan volar por diversión o como un primer paso hacia una carrera en la aviación. ",
    titulo: "Navegación Aérea y Meteorología",
    contenido: "Durante el curso de Navegación Aérea y Meteorología, adquirirás una comprensión profunda de la teoría de vuelo y ganarás experiencia práctica en el cockpit. Nuestro programa abarca temas esenciales como",
    temas:"Principios de Vuelo: Aprenderás los conceptos fundamentales de aerodinámica y cómo funcionan las aeronaves.\n\nReglamentación Aérea: Te familiarizarás con las regulaciones y procedimientos de seguridad que rigen la aviación.\n\nNavegación: Dominarás las técnicas de navegación aérea, incluyendo el uso de cartas de navegación y sistemas de navegación modernos.\n\nManejo de la Aeronave: Obtendrás habilidades prácticas de vuelo, incluyendo despegues, aterrizajes, maniobras y gestión de emergencias.\n\nMeteorología: Comprenderás cómo la meteorología afecta a la aviación y aprenderás a tomar decisiones informadas en relación al clima."
  },
  {
    id: 5,
    image: bautismo,
    icon: <FaTowerObservation />,
    informacion:
      "Este curso es perfecto para aquellos que buscan volar por diversión o como un primer paso hacia una carrera en la aviación. ",
    titulo: "Control de Tráfico Aéreo",
    contenido: "Durante el curso de Control de Tráfico Aéreo, adquirirás una comprensión profunda de la teoría de vuelo y ganarás experiencia práctica en el cockpit. Nuestro programa abarca temas esenciales como",
    temas:"Principios de Vuelo: Aprenderás los conceptos fundamentales de aerodinámica y cómo funcionan las aeronaves.\n\nReglamentación Aérea: Te familiarizarás con las regulaciones y procedimientos de seguridad que rigen la aviación.\n\nNavegación: Dominarás las técnicas de navegación aérea, incluyendo el uso de cartas de navegación y sistemas de navegación modernos.\n\nManejo de la Aeronave: Obtendrás habilidades prácticas de vuelo, incluyendo despegues, aterrizajes, maniobras y gestión de emergencias.\n\nMeteorología: Comprenderás cómo la meteorología afecta a la aviación y aprenderás a tomar decisiones informadas en relación al clima."
  },
  {
    id: 6,
    image: bautismo,
    icon: <GiAirplane />,
    informacion:
      "Este curso es perfecto para aquellos que buscan volar por diversión o como un primer paso hacia una carrera en la aviación. ",
    titulo: "Vuelo bautismo",
    contenido: "Durante el curso de Vuelo bautismo, adquirirás una comprensión profunda de la teoría de vuelo y ganarás experiencia práctica en el cockpit. Nuestro programa abarca temas esenciales como",
    temas:"Principios de Vuelo: Aprenderás los conceptos fundamentales de aerodinámica y cómo funcionan las aeronaves.\n\nReglamentación Aérea: Te familiarizarás con las regulaciones y procedimientos de seguridad que rigen la aviación.\n\nNavegación: Dominarás las técnicas de navegación aérea, incluyendo el uso de cartas de navegación y sistemas de navegación modernos.\n\nManejo de la Aeronave: Obtendrás habilidades prácticas de vuelo, incluyendo despegues, aterrizajes, maniobras y gestión de emergencias.\n\nMeteorología: Comprenderás cómo la meteorología afecta a la aviación y aprenderás a tomar decisiones informadas en relación al clima."
  },
];


const informacionTeam = [
  {
    id: 1,
    nombre: "Jorge Pepito",
    frase: "“Maecenas eget condimentum velit.”",
    titulo: "Piloto",
    image: team,
  },
  {
    id: 2,
    nombre: "Jorge Pepito",
    frase: "“Maecenas eget condimentum velit.”",
    titulo: "Piloto",
    image: team,
  },
  {
    id: 3,
    nombre: "Jorge Pepito",
    frase: "“Maecenas eget condimentum velit.”",
    titulo: "Piloto",
    image: team,
  },
  {
    id: 4,
    nombre: "Jorge Pepito",
    frase: "“Maecenas eget condimentum velit.”",
    titulo: "Piloto",
    image: team,
  },
  {
    id: 5,
    nombre: "Jorge Pepito",
    frase: "“Maecenas eget condimentum velit.”",
    titulo: "Piloto",
    image: team,
  },
];

export {
  informacionCursos,
  informacionAviones,
  informacionTeam,
};
