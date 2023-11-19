import { informacionCursos } from "@/data/data";
import { useRouter } from "next/router";
import Layout from "@/components/layout";
import Image from "next/image";
import flota from "../../public/assets/Flota (2).png"

export default function Curso() {
  const router = useRouter();
  const { id } = router.query;

  const curso = informacionCursos.find((curso) => curso.id === parseInt(id));

  if (!curso) {
    return <p>Curso no encontrado.</p>;
  }

  return (
    <Layout>
      <header className="w-full h-[30vh]">
        <div className="w-full h-[30vh] overflow-hidden flex justify-center items-center">
          <Image
            src={curso.image}
            alt="imagen curso"
            className="w-full top-0 "
          />
        </div>
        <div className="w-full h-[30vh] top-0 absolute fondoBlurCursos"></div>
      </header>

      <section className="p-6 md:mb-0 mb-96">
        <h1 className="text-5xl font-semibold text-[#003459]">
          {curso.titulo}
        </h1>

        <h3 className="text-[#003459] text-2xl font-semibold mt-5">
          Bienvenido al Curso de {curso.titulo}
        </h3>

        <p className="mt-2 font-medium w-full">
          En nuestro centro de formación, te damos la bienvenida a una
          emocionante aventura: convertirte en piloto privado de avión. Nuestro
          curso está diseñado para proporcionarte las habilidades, conocimientos
          y experiencia necesarios para volar con confianza y seguridad en el
          emocionante mundo de la aviación. Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Iure, illo, voluptas magni totam dolorum
          dicta nam reiciendis consequuntur ipsum incidunt sapiente officiis
          blanditiis explicabo ipsa corporis quisquam non. Eius, nam.
        </p>

        <div className="flex flex-col md:flex-row justify-between items-start">
          <article className="lg:w-[50%] w-full p-2">
            <h2 className="font-bold text-3xl mt-5 uppercase text-[#003459]">
              ¿Qué aprenderás?
            </h2>

            <p className="p-1 mt-2 w-full ">{curso.contenido}</p>

            <Image src={curso.image} alt="curso" width={500} className="shadow-md shadow-gray-600 rounded-lg mt-5" />

            <h2 className="font-bold text-3xl mt-5 uppercase text-[#003459]">
              Requisitos:
            </h2>

            <ul className="p-2 font-semibold w-full flex flex-col gap-3 ">
              <ol >
                -Ser mayor de 16 (dieciséis) años y 9 (nueve) meses. Los alumnos
                menores de 18 años tienen la obligación de presentar una
                autorización de los padres certificada por un Juez de Paz.
              </ol>
              <ol>-Tener certificado de estudios primarios escolares.</ol>
              <ol>-Haber obtenido el Psicofísico Clase 2.</ol>
              <ol>
                -Los alumnos extranjeros deben leer, hablar, escribir y entender
                el idioma español.
              </ol>
            </ul>
          </article>
          <article className="lg:w-[50%] w-full  h-96 mt-12 ">

            <div className="w-full">
            {curso.temas.split("\n").map((line, index) => (
              <p key={index} className="mt-5 font-semibold">{line}</p>
            ))}
            </div>

          <Image src={flota} alt="flota" width={300} height={300} className="m-auto mt-16"/>
          </article>
        </div>
      </section>
    </Layout>
  );
}
