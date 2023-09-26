import React from "react";
import Layout from "@/components/layout";
import Header from "@/components/inicio/Header";
import Description from "@/components/inicio/Description";
import Cursos from "@/components/inicio/Cursos";

export default function Index() {
  return (
    <Layout>
      {/* First section  */}
      <Header/>

      {/* second section  */}
      <Description/>

      {/* third section  */}
      <Cursos/>
    </Layout>
  );
}