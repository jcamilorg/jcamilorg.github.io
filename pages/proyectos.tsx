import Head from "next/head";
import Image from "next/image";
import Default from "../layouts/Default";
import styles from "../styles/Home.module.scss";

const info = [
  {
    name: "Mat IoT",
    description: `Es un proyecto web integrada con Iot para medición condiciones ambientales en Tilapias `,
    image: "/assets/mat-iot.png",
    href: "http://mat-iot.125mb.com/",
  },
  {
    name: "Congreso CAR ",
    description: `Aplicación web para promocionar congreso ambiental de Cundinamarca`,
    image: "/assets/congreso.png",
    href: "http://congresoambiental.car.gov.co/",
  },
  {
    name: "Banco Proyectos",
    description: `Aplicación web para Corporación Autónoma Regional de Cundinamarca  `,
    image: "/assets/banco.png",
    href: "https://proud-ground-03115c710.2.azurestaticapps.net/",
  },
  {
    name: "Desarrollador en Corporación Autónoma Regional de Cundinamarca ",
    description: `Demas trabajos con "Corporación Autónoma Regional de Cundinamarca" no publicos en este momento`,
    image: "/assets/web.png",
  },
];

interface propsProyect {
  name: string;
  description: string;
  image: string;
  href: string | undefined;
}

const Proyect = ({ name, description, image, href }: propsProyect) => {
  const btn = href ? (
    <a
      href={href}
      className="lg:mt-0 w-52 inline-block px-4 py-2 leading-none border rounded text-gray-400 border-gray-400 hover:border-indigo-300 hover:text-indigo-300   "
    >
      Ver más
    </a>
  ) : null;
  return (
    <>
      <div className="flex flex-col justify-center lg:col-span-5 col-span-12 px-5 py-20 ">
        <h1 className={"text-7xl py-5 " + styles.textBlueGradient}>{name}</h1>
        <p className="text-xl text-gray-400">{description}</p>
        <br />
        {btn}
      </div>
      <div className="lg:col-span-7 col-span-12 py-20 flex justify-center">
        <a href={href}>
          <Image
            width={582}
            height={658}
            className="img-fluid rounded-lg"
            src={image}
            alt={name}
          />
        </a>
      </div>
    </>
  );
};

export default function Proyectos() {
  return (
    <>
      <Head>
        <title>jcamilorg - Proyectos</title>
        <meta
          name="description"
          content="Portafolio Juan Camilo Ramirez Gonzalez"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Default>
        <div className="container mx-auto">
          <div className="grid grid-cols-12 lg:px-20">
            {info.map((info, index) => (
              <Proyect
                key={index}
                name={info.name}
                description={info.description}
                image={info.image}
                href={info.href}
              />
            ))}
          </div>
        </div>
      </Default>
    </>
  );
}
