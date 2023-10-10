import React from "react";
import Layout from "@/components/layout";
import Header from "@/components/nosotros/Header";
import MisionTeam from "@/components/nosotros/MisionTeam";
import Flota from "@/components/nosotros/Flota";

function nosotros() {
  return (
    <Layout>

      {/* First section  */}
      <Header />

      {/* second section  */}
      <MisionTeam/>

      {/* third section  */}
      <Flota/>
      
    </Layout>
  );
}

export default nosotros;
