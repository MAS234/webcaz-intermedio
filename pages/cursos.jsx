import React from "react";
import Layout from "@/components/layout";
import Header from "@/components/cursos/Header";
import PreguntasFrecuentes from "@/components/cursos/PreguntasFrecuentes";

function cursos() {
  return (
    <Layout>
      {/* First section  */}
      <Header/>

      {/* second section  */}
      <PreguntasFrecuentes/>
    </Layout>
  );
}

export default cursos;
