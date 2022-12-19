import Head from "next/head";
import Image from "next/image";
import Default from "../layouts/Default";
import styles from "../styles/Home.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

export default function Contacto() {
  return (
    <>
      <Head>
        <title>jcamilorg - Contacto</title>
        <meta
          name="description"
          content="Portafolio Juan Camilo Ramirez Gonzalez"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Default>
        <div className="container mx-auto">
          <div className="grid grid-cols-12 lg:px-20">
            <div className="flex flex-col justify-center lg:col-span-8 col-span-12 px-20 ">
              <h1 className={"text-7xl py-5 " + styles.textBlueGradient}>
                <b className={styles.textBlueGradient}>Hagamos</b> algo genial
              </h1>
              <p className="text-xl">
                Estoy buscando oportunidades colaborar con
                compañías/agencias/individuos que busquen desarrollar productos
                de valor.
              </p>
              <br />
              <p className="text-xl">
                Puedes contactarme a través de cualquiera las redes a
                continuación:
              </p>
              <ul>
                <li>
                  <a
                    className="mx-2  rounded "
                    href="https://www.facebook.com/juan.c.gonzalez.10236"
                  >
                    <FontAwesomeIcon
                      className="w-6"
                      icon={faFacebook}
                    ></FontAwesomeIcon>
                    Facebook
                  </a>
                </li>
                <li>
                  {" "}
                  <a
                    className="mx-2  rounded "
                    href="https://www.instagram.com/jcamilo.rg/"
                  >
                    <FontAwesomeIcon
                      className="w-6"
                      icon={faInstagram}
                    ></FontAwesomeIcon>
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    className="mx-2  rounded "
                    href="https://www.instagram.com/jcamilo.rg/"
                  >
                    <FontAwesomeIcon
                      className="w-6"
                      icon={faTwitter}
                    ></FontAwesomeIcon>
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    className="mx-2  rounded "
                    href="https://www.linkedin.com/in/jcamilo-ramirez/"
                  >
                    <FontAwesomeIcon
                      className="w-6"
                      icon={faLinkedin}
                    ></FontAwesomeIcon>
                    LinkedIn
                  </a>
                </li>
                <li>
                  {" "}
                  <a
                    className="mx-2  rounded "
                    href="https://github.com/jcamilorg"
                  >
                    <FontAwesomeIcon
                      className="w-6"
                      icon={faGithub}
                    ></FontAwesomeIcon>
                    Github
                  </a>
                </li>
              </ul>
            </div>
            <div className="lg:col-span-4 col-span-7 py-3">
              <Image
                width={582}
                height={658}
                className="img-fluid rounded-lg"
                src="/assets/contacto.png"
                alt="imagen de perfil Juan Camilo Ramirez"
              />
            </div>
          </div>
        </div>
      </Default>
    </>
  );
}
