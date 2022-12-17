import Head from "next/head";
import Image from "next/image";
import Default from "../layouts/Default";
import styles from "../styles/Home.module.scss";

export default function Proyectos() {
  return (
    <>
      <Head>
        <title>jcamilorg - Home</title>
        <meta
          name="description"
          content="Portafolio Juan Camilo Ramirez Gonzalez"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Default>
        <h1>Hola soy Juan Camilo Ramirez</h1>
      </Default>
    </>
  );
}
