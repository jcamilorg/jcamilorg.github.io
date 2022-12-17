import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="bg-gray-800 text-white text-center text-sm pt-5">
      <div className="flex justify-center py-3">
        <a
          className="w-6 mx-2 invert-color rounded "
          href="https://www.facebook.com/juan.c.gonzalez.10236"
        >
          <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
        </a>
        <a
          className="w-6 mx-2 invert-color rounded  "
          href="https://www.instagram.com/jcamilo.rg/"
        >
          <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
        </a>
        <a
          className="w-6 mx-2 invert-color rounded "
          href="https://twitter.com/j_camilorg"
        >
          <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
        </a>
        <a
          className="w-6 mx-2 invert-color rounded "
          href="https://www.linkedin.com/in/jcamilo-ramirez/"
        >
          <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
        </a>
        <a
          className="w-6 mx-2  invert-color rounded "
          href="https://github.com/jcamilorg"
        >
          <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
        </a>
      </div>
      <p className="italic pb-3">
        La mejor forma de predecir el futuro es creandolo{" "}
      </p>
      <p className="pb-3 text-xs text-neutral-300">
        Copyright ©{year} Juan Camilo Ramirez • Web Designer & Web Developer
      </p>
    </div>
  );
}
