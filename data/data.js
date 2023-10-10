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
    informacion:
      "Este curso es perfecto para aquellos que buscan volar por diversión o como un primer paso hacia una carrera en la aviación. ",
    titulo: "Piloto Privado",
  },
  {
    id: 2,
    image: bautismo,
    informacion:
      "Este curso es perfecto para aquellos que buscan volar por diversión o como un primer paso hacia una carrera en la aviación. ",
    titulo: "Vuelo Bautismo",
  },
  {
    id: 3,
    image: instructor,
    informacion:
      "Este curso es perfecto para aquellos que buscan volar por diversión o como un primer paso hacia una carrera en la aviación. ",
    titulo: "Instructor de Vuelo",
  },
  {
    id: 4,
    image: privado,
    informacion:
      "Este curso es perfecto para aquellos que buscan volar por diversión o como un primer paso hacia una carrera en la aviación. ",
    titulo: "Piloto Privado",
  },
  {
    id: 5,
    image: bautismo,
    informacion:
      "Este curso es perfecto para aquellos que buscan volar por diversión o como un primer paso hacia una carrera en la aviación. ",
    titulo: "Vuelo Bautismo",
  },
  {
    id: 6,
    image: bautismo,
    informacion:
      "Este curso es perfecto para aquellos que buscan volar por diversión o como un primer paso hacia una carrera en la aviación. ",
    titulo: "Vuelo Bautismo",
  },
  {
    id: 7,
    image: bautismo,
    informacion:
      "Este curso es perfecto para aquellos que buscan volar por diversión o como un primer paso hacia una carrera en la aviación. ",
    titulo: "Vuelo Bautismo",
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

const informacionCardsCursos = [
  {
    id: 1,
    icon: <FaPlaneDeparture />,
    titulo: "Piloto de Avión Comercial",
  },
  {
    id: 2,
    icon: <GiCaptainHatProfile />,
    titulo: " Instructor de vuelo",
  },
  {
    id: 3,
    icon: <BsFillAirplaneFill />,
    titulo: "PILOTO PRIVADO",
  },
  {
    id: 4,
    icon: <TbNorthStar />,
    titulo: "Navegación Aérea y Meteorología",
  },
  {
    id: 5,
    icon: <FaTowerObservation />,
    titulo: "Control de Tráfico Aéreo",
  },
  {
    id: 6,
    icon: <GiAirplane />,
    titulo: "Vuelo bautismo",
  },
  
  
];

export {
  informacionCursos,
  informacionAviones,
  informacionTeam,
  informacionCardsCursos,
};
