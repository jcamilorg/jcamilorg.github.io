import Head from "next/head";
import Image from "next/image";
import Default from "../layouts/Default";
import styles from "../styles/Home.module.scss";

export default function Home() {
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
        <div className="container mx-auto">
          <div className="grid grid-cols-12 lg:px-20">
            <div className="flex flex-col justify-center lg:col-span-8 col-span-12 px-10 ">
              <h1 className={"text-7xl py-5 " + styles.textBlueGradient}>
                <b className={styles.textBlueGradient}>Hola,</b> soy Juan Camilo
                Ramírez
              </h1>
              <p className="text-xl">
                Soy un ingeniero electrónico y estudiante de maestría en
                ingeniería de software apasionado por el tema de la tecnología
                telecomunicaciones y desarrollo. tengo experiencia desarrollando
                proyectos como aplicaciones Web a nivel de FrontEnd utilizando
                React, Nextjs. realizado aplicaciones complejas donde se
                involucra consumo de APIs.
              </p>
              <br />
              <p className="text-xl">
                También cuento con habilidades en sistemas de IoT, manejo
                lenguajes de programación como JavaScript, TypeScript Python,
                C#, y manejo de softwares de edición de video y fotografía
              </p>
            </div>
            <div className="lg:col-span-4 col-span-7 py-3">
              <Image
                width={582}
                height={658}
                className="img-fluid rounded-lg"
                src="assets/perfil.png"
                alt="imagen de perfil Juan Camilo Ramirez"
              />
            </div>
          </div>
        </div>
      </Default>
    </>
  );
}
