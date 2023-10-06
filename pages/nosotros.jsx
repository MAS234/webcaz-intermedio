import React from "react";
import Layout from "@/components/layout";
import Header from "@/components/nosotros/Header";
import MisionTeam from "@/components/nosotros/MisionTeam";

function nosotros() {
  return (
    <Layout>

      {/* First section  */}
      <Header />

      {/* second section  */}
      <MisionTeam/>
      
    </Layout>
  );
}

export default nosotros;
