import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faWhatsapp,
  faGithub,
  faInstagram,
  faLinkedin,
  faCodepen,
} from "@fortawesome/free-brands-svg-icons";
const year = new Date().getFullYear();

function Footer() {
  const { t } = useTranslation();
  return (
    <div className="w-full bg-purple-600 flex flex-col">
      <div className="mx-auto mt-4">
        <div className="inline-flex mb-2">
          <a
            href={`https://wa.me/${t("HomeBanner.PhoneNumber")}`}
            target="_blank"
          >
            <button
              className="bg-emerald-700 hover:bg-emerald-900 text-white dark:bg-zinc-200 dark:text-pink-600 dark:hover:text-pink-800 dark:hover:bg-zinc-300 shadow-lg font-normal h-9 w-9 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
              type="button"
            >
              <FontAwesomeIcon icon={faWhatsapp} size="lg" />
            </button>
          </a>
          <a href="mailto:fernandokojidev@gmail.com" target="_blank">
            <button
              className="bg-emerald-700 hover:bg-emerald-900 text-white dark:bg-zinc-200 dark:text-pink-600 dark:hover:text-pink-800 dark:hover:bg-zinc-300 shadow-lg font-normal h-9 w-9 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
              type="button"
            >
              <FontAwesomeIcon icon={faEnvelope} size="lg" />
            </button>
          </a>
          <a href="https://github.com/Kojji" target="_blank">
            <button
              className="bg-emerald-700 hover:bg-emerald-900 text-white dark:bg-zinc-200 dark:text-pink-600 dark:hover:text-pink-800 dark:hover:bg-zinc-300 shadow-lg font-normal h-9 w-9 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
              type="button"
            >
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </button>
          </a>
          <a href="https://www.instagram.com/nandokoji/" target="_blank">
            <button
              className="bg-emerald-700 hover:bg-emerald-900 text-white dark:bg-zinc-200 dark:text-pink-600 dark:hover:text-pink-800 dark:hover:bg-zinc-300 shadow-lg font-normal h-9 w-9 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
              type="button"
            >
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </button>
          </a>
          <a
            href="https://www.linkedin.com/in/fernandokojiyama/"
            target="_blank"
          >
            <button
              className="bg-emerald-700 hover:bg-emerald-900 text-white dark:bg-zinc-200 dark:text-pink-600 dark:hover:text-pink-800 dark:hover:bg-zinc-300 shadow-lg font-normal h-9 w-9 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
              type="button"
            >
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </button>
          </a>
          <a href="https://codepen.io/kojji" target="_blank">
            <button
              className="bg-emerald-700 hover:bg-emerald-900 text-white dark:bg-zinc-200 dark:text-pink-600 dark:hover:text-pink-800 dark:hover:bg-zinc-300 shadow-lg font-normal h-9 w-9 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
              type="button"
            >
              <FontAwesomeIcon icon={faCodepen} size="lg" />
            </button>
          </a>
        </div>
      </div>
      <div className="w-full text-center dark:text-white mb-2">
        {/* Copyright ©*/} {year} - made by Fernando Koji Yamashiro.
      </div>
    </div>
  );
}

export default Footer;
