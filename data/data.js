import bautismo from "../public/assets/bautismo.png";
import privado from "../public/assets/privado.png";
import instructor from "../public/assets/instructor.png";
import avion1 from "../public/assets/AvionesMuestra.jpg"
import avion2 from "../public/assets/AvionesMuestra2.jpg"
import avion3 from "../public/assets/AvionesMuestra3.jpg"
import avion4 from "../public/assets/AvionesMuestra4.jpg"

const informacionAviones = [
    {
        id:1,
        image: avion1,
        modelo: "LV-JQK 500",
        nombre: "Avion"
    },
    {
        id:3,
        image: avion3,
        modelo: "LV-JQK 500",
        nombre: "Avion"
    },
    {
        id:4,
        image: avion4,
        modelo: "LV-JQK 500",
        nombre: "Avion"
    }
]

const informacionCursos = [
    {
        id:1,
        image:privado,
        informacion: "Este curso es perfecto para aquellos que buscan volar por diversión o como un primer paso hacia una carrera en la aviación. ",
        titulo: "Piloto Privado"
    },
    {
        id:2,
        image:bautismo,
        informacion: "Este curso es perfecto para aquellos que buscan volar por diversión o como un primer paso hacia una carrera en la aviación. ",
        titulo: "Vuelo Bautismo"
    },
    {
        id:3,
        image:instructor,
        informacion: "Este curso es perfecto para aquellos que buscan volar por diversión o como un primer paso hacia una carrera en la aviación. ",
        titulo: "Instructor de Vuelo"
    },
    {
        id:4,
        image:privado,
        informacion: "Este curso es perfecto para aquellos que buscan volar por diversión o como un primer paso hacia una carrera en la aviación. ",
        titulo: "Piloto Privado"
    },
    {
        id:5,
        image:bautismo,
        informacion: "Este curso es perfecto para aquellos que buscan volar por diversión o como un primer paso hacia una carrera en la aviación. ",
        titulo: "Vuelo Bautismo"
    },
    {
        id:6,
        image:bautismo,
        informacion: "Este curso es perfecto para aquellos que buscan volar por diversión o como un primer paso hacia una carrera en la aviación. ",
        titulo: "Vuelo Bautismo"
    },
    {
        id:7,
        image:bautismo,
        informacion: "Este curso es perfecto para aquellos que buscan volar por diversión o como un primer paso hacia una carrera en la aviación. ",
        titulo: "Vuelo Bautismo"
    },
]

export {informacionCursos, informacionAviones}