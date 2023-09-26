import Head from "next/head";
import "@/styles/global.css";
import { useEffect } from "react"; 
import AOS from "aos"; 
import "aos/dist/aos.css"; 

function App({ Component, pageProps }) {

  useEffect(() => {
    // Inicializa AOS
    AOS.init({
      duration: 1000, 
      once: true, 
    });
  }, []);

  return (
    <>
      <Head>
        <title>AeroWebs</title>
        <meta name="description" content="Volemos juntos en la web."></meta>
      </Head>

      <Component {...pageProps} />

    </>
  );
}

export default App;
