import React from "react";
import Layout from "@/components/layout";
import Header from "@/components/inicio/Header";
import Description from "@/components/inicio/Description";
import Cursos from "@/components/inicio/Cursos";
import Aviones from "@/components/inicio/Aviones";
import Mapa from "@/components/inicio/Mapa";

export default function Index() {
  return (
    <Layout>
      {/* First section  */}
      <Header/>

      {/* second section  */}
      <Description/>

      {/* third section  */}
      <Cursos/>

      {/* fourth section */}
      <Aviones/>

      {/* fifth section  */}
      <Mapa/>

    </Layout>
  );
}
